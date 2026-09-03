import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthenticationRateLimitService } from './authentication-rate-limit.service';

describe('AuthenticationRateLimitService', () => {
  let service: AuthenticationRateLimitService;

  const incrementWithExpiry = jest.fn<Promise<number>, [string, number]>();

  const redisService = {
    incrementWithExpiry,
  };

  const configService = {
    getOrThrow: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    configService.getOrThrow.mockImplementation((key: string) => {
      const values: Record<string, number> = {
        AUTH_RATE_LIMIT_LOGIN_MAX: 5,
        AUTH_RATE_LIMIT_LOGIN_WINDOW_SECONDS: 900,
        AUTH_RATE_LIMIT_RECOVERY_MAX: 5,
        AUTH_RATE_LIMIT_RECOVERY_WINDOW_SECONDS: 900,
        AUTH_RATE_LIMIT_VERIFICATION_MAX: 5,
        AUTH_RATE_LIMIT_VERIFICATION_WINDOW_SECONDS: 900,
        AUTH_RATE_LIMIT_REFRESH_MAX: 30,
        AUTH_RATE_LIMIT_REFRESH_WINDOW_SECONDS: 900,
        AUTH_RATE_LIMIT_IP_MAX: 30,
        AUTH_RATE_LIMIT_IP_WINDOW_SECONDS: 900,
      };

      return values[key];
    });

    incrementWithExpiry.mockResolvedValue(1);

    service = new AuthenticationRateLimitService(
      redisService as never,
      configService as unknown as ConfigService,
    );
  });

  describe('normalizeEmail', () => {
    it('should trim and lowercase an email address', () => {
      expect(service.normalizeEmail('  User@EXAMPLE.COM  ')).toBe(
        'user@example.com',
      );
    });
  });

  describe('normalizeIp', () => {
    it('should trim an IP address', () => {
      expect(service.normalizeIp(' 127.0.0.1 ')).toBe('127.0.0.1');
    });
  });

  describe('checkLogin', () => {
    it('should apply both email and IP limits', async () => {
      await service.checkLogin(' User@Example.com ', ' 127.0.0.1 ');

      expect(incrementWithExpiry).toHaveBeenCalledTimes(2);

      const calls = incrementWithExpiry.mock.calls;

      expect(calls[0][0]).toMatch(/^auth:login:email:[a-f0-9]{64}$/);
      expect(calls[0][1]).toBe(900);

      expect(calls[1][0]).toMatch(/^auth:login:ip:[a-f0-9]{64}$/);
      expect(calls[1][1]).toBe(900);
    });

    it('should not store the raw email or IP in Redis keys', async () => {
      await service.checkLogin('User@Example.com', '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      for (const [key] of calls) {
        expect(key).not.toContain('User@Example.com');
        expect(key).not.toContain('127.0.0.1');
      }
    });

    it('should use the same email key for differently formatted emails', async () => {
      await service.checkLogin(' User@Example.com ', '127.0.0.1');

      const firstEmailKey = incrementWithExpiry.mock.calls[0][0];

      jest.clearAllMocks();
      incrementWithExpiry.mockResolvedValue(1);

      await service.checkLogin('user@example.com', '127.0.0.1');

      const secondEmailKey = incrementWithExpiry.mock.calls[0][0];

      expect(secondEmailKey).toBe(firstEmailKey);
    });

    it('should throw 429 when the email limit is exceeded', async () => {
      incrementWithExpiry.mockResolvedValueOnce(6);

      await expect(
        service.checkLogin('user@example.com', '127.0.0.1'),
      ).rejects.toMatchObject({
        status: HttpStatus.TOO_MANY_REQUESTS,
        message: 'Too many requests. Please try again later.',
      });
    });

    it('should stop before checking the IP limit when the email limit is exceeded', async () => {
      incrementWithExpiry.mockResolvedValueOnce(6);

      await expect(
        service.checkLogin('user@example.com', '127.0.0.1'),
      ).rejects.toThrow(HttpException);

      expect(incrementWithExpiry).toHaveBeenCalledTimes(1);
    });

    it('should throw 429 when the IP limit is exceeded', async () => {
      incrementWithExpiry.mockResolvedValueOnce(1).mockResolvedValueOnce(31);

      await expect(
        service.checkLogin('user@example.com', '127.0.0.1'),
      ).rejects.toMatchObject({
        status: HttpStatus.TOO_MANY_REQUESTS,
        message: 'Too many requests. Please try again later.',
      });

      expect(incrementWithExpiry).toHaveBeenCalledTimes(2);
    });
  });

  describe('checkRecovery', () => {
    it('should use the recovery email and IP namespaces', async () => {
      await service.checkRecovery('user@example.com', '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      expect(calls[0][0]).toMatch(/^auth:recovery:email:[a-f0-9]{64}$/);
      expect(calls[1][0]).toMatch(/^auth:recovery:ip:[a-f0-9]{64}$/);

      expect(calls[0][1]).toBe(900);
      expect(calls[1][1]).toBe(900);
    });
  });

  describe('checkVerification', () => {
    it('should use the verification email and IP namespaces', async () => {
      await service.checkVerification('user@example.com', '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      expect(calls[0][0]).toMatch(/^auth:verification:email:[a-f0-9]{64}$/);
      expect(calls[1][0]).toMatch(/^auth:verification:ip:[a-f0-9]{64}$/);

      expect(calls[0][1]).toBe(900);
      expect(calls[1][1]).toBe(900);
    });
  });

  describe('checkRefresh', () => {
    it('should apply refresh-token and IP limits', async () => {
      await service.checkRefresh('refresh-token-value', '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      expect(calls[0][0]).toMatch(/^auth:refresh:token:[a-f0-9]{64}$/);
      expect(calls[1][0]).toMatch(/^auth:refresh:ip:[a-f0-9]{64}$/);

      expect(calls[0][1]).toBe(900);
      expect(calls[1][1]).toBe(900);
    });

    it('should not store the raw refresh token in the Redis key', async () => {
      const refreshToken = 'sensitive-refresh-token';

      await service.checkRefresh(refreshToken, '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      for (const [key] of calls) {
        expect(key).not.toContain(refreshToken);
      }
    });
  });

  describe('configuration', () => {
    it('should use the configured login limit and window', async () => {
      configService.getOrThrow.mockImplementation((key: string) => {
        if (key === 'AUTH_RATE_LIMIT_LOGIN_MAX') {
          return 10;
        }

        if (key === 'AUTH_RATE_LIMIT_LOGIN_WINDOW_SECONDS') {
          return 60;
        }

        if (key === 'AUTH_RATE_LIMIT_IP_MAX') {
          return 50;
        }

        if (key === 'AUTH_RATE_LIMIT_IP_WINDOW_SECONDS') {
          return 120;
        }

        return 900;
      });

      await service.checkLogin('user@example.com', '127.0.0.1');

      const calls = incrementWithExpiry.mock.calls;

      expect(calls[0][1]).toBe(60);
      expect(calls[1][1]).toBe(120);
    });
  });

  describe('rate-limit failures', () => {
    it('should propagate Redis failures', async () => {
      const error = new Error('Redis unavailable');

      incrementWithExpiry.mockRejectedValue(error);

      await expect(
        service.checkLogin('user@example.com', '127.0.0.1'),
      ).rejects.toThrow('Redis unavailable');
    });
  });
});
