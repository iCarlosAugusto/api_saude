import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteNewsDto {
  
  @IsString()
  @IsNotEmpty()
  id: string;
}
