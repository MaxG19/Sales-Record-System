import { RedisService } from './redis.service';

describe('RedisService', () => {
  let service: RedisService;

  const evalMock = jest.fn<Promise<unknown>, [string, number, ...unknown[]]>();

  const redisClient = {
    ping: jest.fn(),
    quit: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
    eval: evalMock,
  };

  const configService = {
    getOrThrow: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    configService.getOrThrow.mockReturnValue('redis://localhost:6379');

    service = Object.create(RedisService.prototype) as RedisService;

    Object.defineProperty(service, 'client', {
      value: redisClient,
      writable: false,
    });
  });

  describe('incrementWithExpiry', () => {
    it('should atomically increment a new counter and set its expiry', async () => {
      evalMock.mockResolvedValue(1);

      const result = await service.incrementWithExpiry(
        'password-reset:user@example.com',
        900,
      );

      expect(result).toBe(1);
      expect(evalMock).toHaveBeenCalledTimes(1);

      const [script, keyCount, key, ttl] = evalMock.mock.calls[0];

      expect(script).toContain("redis.call('INCR', KEYS[1])");
      expect(script).toContain("redis.call('EXPIRE', KEYS[1], ARGV[1])");
      expect(keyCount).toBe(1);
      expect(key).toBe('password-reset:user@example.com');
      expect(ttl).toBe(900);
    });

    it('should atomically increment an existing counter without resetting its expiry', async () => {
      evalMock.mockResolvedValue(2);

      const result = await service.incrementWithExpiry(
        'password-reset:user@example.com',
        900,
      );

      expect(result).toBe(2);
      expect(evalMock).toHaveBeenCalledTimes(1);

      const [script, keyCount, key, ttl] = evalMock.mock.calls[0];

      expect(script).toContain("redis.call('INCR', KEYS[1])");
      expect(script).toContain('if count == 1 then');
      expect(script).toContain("redis.call('EXPIRE', KEYS[1], ARGV[1])");
      expect(keyCount).toBe(1);
      expect(key).toBe('password-reset:user@example.com');
      expect(ttl).toBe(900);
    });

    it('should return the numeric result from Redis', async () => {
      evalMock.mockResolvedValue('3');

      const result = await service.incrementWithExpiry(
        'password-reset:user@example.com',
        900,
      );

      expect(result).toBe(3);
    });
  });
});
