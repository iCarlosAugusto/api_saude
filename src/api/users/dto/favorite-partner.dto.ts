import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class FavoritePartnerDto {
  
  @IsString()
  @IsNotEmpty()
  partnerId: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsBoolean()
  @IsNotEmpty()
  isFavorite: boolean;
}
