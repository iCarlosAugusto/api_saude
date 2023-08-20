import { IsNotEmpty, IsString } from 'class-validator';

export class FindPartnersByCategoryDto {
  
  @IsString()
  @IsNotEmpty()
  category: string;
}
