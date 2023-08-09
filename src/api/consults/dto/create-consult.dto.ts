import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsultDto {

  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsString()
  @IsNotEmpty()
  clientEmailMessage: string;

  @IsNotEmpty()
  @IsString()
  clientEmail: string;

  @IsNotEmpty()
  @IsString()
  partnerId: string;

  @IsString()
  @IsNotEmpty()
  partnerEmailMessage: string;

  @IsNotEmpty()
  @IsString()
  partnerEmail: string;

  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
