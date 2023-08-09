import {  IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class ResetClientPasswordDto {
  
  @IsEmail()
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;
}
