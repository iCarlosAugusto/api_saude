import { IsNumber, IsString } from 'class-validator';

export class UpdateConsultDto{
  @IsNumber()
  @IsString()
  id: number;
}
