import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsString()
  @IsNotEmpty()
  identification: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatória' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O número para contato é obrigatória' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  partnerId: string; 
}
