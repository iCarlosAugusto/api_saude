import { IsNotEmpty, IsString } from 'class-validator';

export class GetFavoritePartnersDto {

  @IsString()
  @IsNotEmpty()
  clientId: string;
}