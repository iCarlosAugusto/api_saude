import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  identification: string;

  @IsString()
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString()
  @IsNotEmpty()
  registerCode: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatório' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatória' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O número é obrigatória' })
  phoneNumber: string;
}
