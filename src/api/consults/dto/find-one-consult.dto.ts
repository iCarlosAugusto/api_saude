import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneConsultDto{

  @IsNotEmpty()
  @IsString()
  id: string;
}
