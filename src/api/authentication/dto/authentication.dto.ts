import { IsEmail, IsNotEmpty, IsString, ValidateIf, IsOptional } from 'class-validator';

export class AuthenticationDto {

  @IsString()
  @IsOptional()
  @IsEmail()
  @ValidateIf((o) =>!o.identification)
  email?: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => !o.email)
  identification?: string;

  @IsString()
  @IsNotEmpty()
  password: string; 
}
