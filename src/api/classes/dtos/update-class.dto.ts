import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateClassDto {
  @IsNotEmpty()
  @IsString()
  classId: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsInt()
  lots: number;

  @IsOptional()
  @IsString()
  startAt: string;

  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  dateTimestamp: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  place: string;

  @IsString()
  @IsOptional()
  bannerImage?: string;
  

  @IsOptional()
  @IsString()
  teacherName: string;
}
