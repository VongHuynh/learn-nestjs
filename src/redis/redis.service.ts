import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { redisConfig } from 'src/config/redisConfig';


@Injectable()
export class RedisService {
  private readonly redisClient: Redis;

  constructor() {
    // Initialize the Redis client
    this.redisClient = new Redis(redisConfig);
  }

  async setValue(key: string, value: string): Promise<void> {
    // Set a value in Redis
    await this.redisClient.set(key, value);
  }

  async getValue(key: string): Promise<string | null> {
    // Get a value from Redis
    return this.redisClient.get(key);
  }
}