import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {

  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'A descrição é obrigatório' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'O preço é obrigatório' })
  @IsString()
  price: string;

  @IsNotEmpty({ message: 'O partner id é obrigatório' })
  @IsString()
  partnerId: string;

  @IsString()
  @IsOptional()
  bannerImage?: string;

  @IsString()
  @IsNotEmpty({ message: "O endereço do parceiro responsável é obrigatório"})
  address: string;

  @IsString()
  @IsNotEmpty({ message: "O endereço do parceiro responsável é obrigatório"})
  specialitie: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  dateTimestamp: string;

  @IsString()
  @IsNotEmpty()
  startAt: string;

  @IsString()
  @IsNotEmpty()
  endAt: string;

  @IsString()
  @IsNotEmpty()
  professionalName: string;

  @IsString()
  @IsNotEmpty()
  place: string;
}