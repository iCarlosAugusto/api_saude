import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindScheduledClassesAndConsultsDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsOptional()
  @IsString()
  date?: string;
}
