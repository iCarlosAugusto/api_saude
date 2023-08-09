import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordPartnerDto {

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha atual é obrigatória' })
  currentPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'A nova senha é obrigatória' })
  newPassword: string;
}