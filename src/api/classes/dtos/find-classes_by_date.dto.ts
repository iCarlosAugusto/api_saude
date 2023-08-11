import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class FindAllClassesByDateDto {

  @IsNotEmpty()
  @IsString()
  companyId: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
