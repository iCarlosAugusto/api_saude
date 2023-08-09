import { IsNotEmpty, IsString } from 'class-validator';

export class FindCompaniesByDateDto {

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  partnerId: string;

}
