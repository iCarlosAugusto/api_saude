import { ArrayMinSize, IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsString()
  @IsOptional()
  photo?: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  consultTimeMedium: string;

  @IsString()
  @IsNotEmpty()
  consultPriceMedium: string;
   
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  categories: string[];
}
