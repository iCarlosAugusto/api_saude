import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  bannerImage: string;

  @IsString()
  @IsNotEmpty()
  logoImage: string;

  @IsString()
  @IsNotEmpty()
  partnerId: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
