import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Alex', description: 'Имя пользователя' })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'Alex$#9901',
    description: 'Пароль пользователя, минимум 4 символа',
  })
  @IsString()
  @MinLength(4, { message: 'password must be more 3 symbols' })
  password: string;
}
