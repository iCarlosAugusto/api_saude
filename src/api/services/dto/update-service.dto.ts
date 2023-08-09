import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateServiceDto {

  @IsNumber()
  @IsNotEmpty()
  id: number;
}
