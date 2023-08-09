import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FindAllClientConsultsDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsOptional()
  @IsBoolean()
  isFinished?: boolean;

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  startDateTimestamp?: number;

  @IsOptional()
  @IsNumber()
  limitDateTimestamp?: number;
}
