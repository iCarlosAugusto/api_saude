import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllClientsOnClassDto {
  @IsNotEmpty()
  @IsString()
  classId: string;
}
