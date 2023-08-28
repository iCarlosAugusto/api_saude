import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClassDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description : string;

  @IsInt()
  @Type(() => Number)
  lots: number;

  @IsString()
  @IsNotEmpty()
  startAt: string;

  @IsString()
  @IsNotEmpty()
  endAt: string;

  @IsString()
  @IsNotEmpty()
  address: string; 
  
  @IsString()
  @IsNotEmpty()
  place: string;

  @IsString()
  @IsOptional()
  bannerImage?: string;

  @IsString()
  @IsNotEmpty()
  professionalName: string;
  
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @IsString()
  @IsNotEmpty()
  dateTimestamp: string;

  @IsString()
  @IsNotEmpty()
  date: string;
}
