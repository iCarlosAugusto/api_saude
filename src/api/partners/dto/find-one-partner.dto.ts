import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneParnetDto{
  
  @IsString()
  @IsNotEmpty()
  id: string;
}
