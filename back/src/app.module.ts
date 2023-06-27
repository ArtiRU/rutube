import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { getTypeOrmConfig } from './config/getTypeOrmConfig';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService],
    }),
    AuthModule,
    VideoModule,
    CommentModule,
    UserModule,
    MediaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
