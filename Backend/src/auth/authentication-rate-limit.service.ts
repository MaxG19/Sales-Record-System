import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'node:crypto';
import { RedisService } from '../common/redis/redis.service';

@Injectable()
export class AuthenticationRateLimitService {
  constructor(
    private readonly redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}

  normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }

  normalizeIp(ip: string): string {
    return ip.trim();
  }

  private hash(value: string): string {
    return createHash('sha256').update(value, 'utf8').digest('hex');
  }

  async checkLogin(email: string, ip: string): Promise<void> {
    const normalizedEmail = this.normalizeEmail(email);
    const normalizedIp = this.normalizeIp(ip);

    await this.checkLimit(
      `auth:login:email:${this.hash(normalizedEmail)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_LOGIN_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_LOGIN_WINDOW_SECONDS',
      ),
    );

    await this.checkLimit(
      `auth:login:ip:${this.hash(normalizedIp)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_IP_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_IP_WINDOW_SECONDS',
      ),
    );
  }

  async checkRecovery(email: string, ip: string): Promise<void> {
    const normalizedEmail = this.normalizeEmail(email);
    const normalizedIp = this.normalizeIp(ip);

    await this.checkLimit(
      `auth:recovery:email:${this.hash(normalizedEmail)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_RECOVERY_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_RECOVERY_WINDOW_SECONDS',
      ),
    );

    await this.checkLimit(
      `auth:recovery:ip:${this.hash(normalizedIp)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_IP_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_IP_WINDOW_SECONDS',
      ),
    );
  }

  async checkVerification(email: string, ip: string): Promise<void> {
    const normalizedEmail = this.normalizeEmail(email);
    const normalizedIp = this.normalizeIp(ip);

    await this.checkLimit(
      `auth:verification:email:${this.hash(normalizedEmail)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_VERIFICATION_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_VERIFICATION_WINDOW_SECONDS',
      ),
    );

    await this.checkLimit(
      `auth:verification:ip:${this.hash(normalizedIp)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_IP_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_IP_WINDOW_SECONDS',
      ),
    );
  }

  async checkRefresh(refreshToken: string, ip: string): Promise<void> {
    const normalizedIp = this.normalizeIp(ip);

    await this.checkLimit(
      `auth:refresh:token:${this.hash(refreshToken)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_REFRESH_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_REFRESH_WINDOW_SECONDS',
      ),
    );

    await this.checkLimit(
      `auth:refresh:ip:${this.hash(normalizedIp)}`,
      this.configService.getOrThrow<number>('AUTH_RATE_LIMIT_IP_MAX'),
      this.configService.getOrThrow<number>(
        'AUTH_RATE_LIMIT_IP_WINDOW_SECONDS',
      ),
    );
  }

  private async checkLimit(
    key: string,
    limit: number,
    windowSeconds: number,
  ): Promise<void> {
    const count = await this.redisService.incrementWithExpiry(
      key,
      windowSeconds,
    );

    if (count > limit) {
      throw new HttpException(
        'Too many requests. Please try again later.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }
}
