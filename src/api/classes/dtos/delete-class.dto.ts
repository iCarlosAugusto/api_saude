import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteClassDto {
  @IsNotEmpty()
  @IsString()
  classId: string;
}
