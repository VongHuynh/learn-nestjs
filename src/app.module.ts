import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configOrm from 'src/config/ormConfig';
import { CacheModule } from '@nestjs/cache-manager';
import { redisConfig } from 'src/config/redisConfig';



@Module({
  imports: [
          UserModule, 
          CommentModule, 
          TypeOrmModule.forRoot(configOrm), 
          CacheModule.register(redisConfig)
        ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}