import { IsNotEmpty, IsString } from 'class-validator';

export class FindPartnerByRegisterCodeDto {
  
  @IsString()
  @IsNotEmpty()
  code: string;
}
