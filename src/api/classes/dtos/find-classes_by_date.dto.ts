import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllClassesByDateDto {

  @IsNotEmpty()
  @IsString()
  companyId: string;

  @IsNotEmpty()
  @IsString()
  startDate: string;

  @IsNotEmpty()
  @IsString()
  endDate: string;
}
