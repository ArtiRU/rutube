import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: 'localhost',
  port: configService.get<number>('PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('PASSWORD'),
  database: configService.get<string>('DATABASE'),
  autoLoadEntities: true,
  synchronize: true,
});
