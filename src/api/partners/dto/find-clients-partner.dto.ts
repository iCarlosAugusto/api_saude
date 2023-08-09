import { IsNotEmpty, IsString } from 'class-validator';

export class FindClientsPartnerDto {
  
  @IsNotEmpty()
  @IsString()
  partnerId: string;
}
