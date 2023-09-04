import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
  
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
  

  @IsOptional()
  @IsString()
  link?: string
}
