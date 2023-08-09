import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindAllClassesDto{
  @IsNotEmpty()
  @IsString()
  companyId: string;
  
  @IsOptional()
  @IsBoolean()
  bookedClasses: false;

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsString()
  clientIdentification?: string;
}
