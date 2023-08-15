import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindScheduledClassesDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsOptional()
  @IsString()
  date?: string;
}
