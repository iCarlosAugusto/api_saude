import { IsNotEmpty, IsString } from 'class-validator';

export class CancelClientClassDto {
  @IsNotEmpty()
  @IsString()
  classId: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;
}
