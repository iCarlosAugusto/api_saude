import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
  
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  photo: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;
}
