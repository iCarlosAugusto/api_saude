import { IsNotEmpty, IsString } from 'class-validator';

export class BookClassDto {

  @IsNotEmpty()
  @IsString()
  classId: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;
}
