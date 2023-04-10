import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';
export class UserDto {
	@Expose()
	@ApiProperty()
	@IsString()
	name: string;

	@Expose()
	@ApiProperty()
	@IsString()
	username: string;

	@Expose()
	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	password: string;

	@Expose()
	@ApiPropertyOptional()
	image?: string;
}
