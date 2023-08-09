import { IsNumber, IsOptional } from 'class-validator';

export class FindAllParnerstDto {
  
  @IsOptional()
  @IsNumber()
  skip: number;
}
