import { IsNotEmpty, IsString } from 'class-validator';

export class FindByPartnerIdDto {
  @IsNotEmpty()
  @IsString()
  partnerId: string;
}
