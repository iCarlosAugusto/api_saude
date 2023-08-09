import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FindAllPartnerConsultsDto {
  @IsNotEmpty()
  @IsString()
  partnerId: string;

  @IsOptional()
  @IsBoolean()
  isFinished?: boolean;

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  startDateTimestamp?: number;

  @IsOptional()
  @IsNumber()
  limitDateTimestamp?: number;
}
