import { IsNumber, IsOptional } from 'class-validator';

export class FindAllServicesDto {
  @IsOptional()
  @IsNumber()
  skip: number;
}
