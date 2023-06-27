import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'Email не может быть пустым!' })
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  avatarPath?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;
}
