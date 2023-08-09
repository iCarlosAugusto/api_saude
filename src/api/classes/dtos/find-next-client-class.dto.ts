import { IsNotEmpty, IsString } from 'class-validator';

export class FindNextClientClassDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;
}
