import { Module } from '@nestjs/common';
import { RedisModule } from '../common/redis/redis.module';
import { AuthenticationRateLimitService } from './authentication-rate-limit.service';

@Module({
  imports: [RedisModule],
  providers: [AuthenticationRateLimitService],
  exports: [AuthenticationRateLimitService],
})
export class AuthenticationRateLimitModule {}
