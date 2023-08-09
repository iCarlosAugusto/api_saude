import { IsNotEmpty, IsString } from 'class-validator';

export class FindCompanyByPartnerIdDto {
  @IsNotEmpty()
  @IsString()
  partnerId: string;
}
