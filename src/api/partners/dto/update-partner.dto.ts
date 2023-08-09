import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePartnerDto {
  
  @IsNotEmpty({ message: "Id é obrigatório"})
  @IsString({message: "O Id precisa ser uma string"})
  id: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido',  })
  email: string;

  @IsOptional({ message: 'O nome é obrigatória' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;
  
  @IsOptional()
  @IsString()
  specialties: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  servicePrice: string;

  @IsOptional()
  @IsString()
  jobDescription: string;

  @IsOptional()
  @IsString()
  photo: string;
}
