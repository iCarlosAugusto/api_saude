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

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  availableDay: string[];

  @IsString()
  @IsNotEmpty()
  bannerImage: string;

  @IsString()
  @IsNotEmpty()
  partnerId: string;
}
