import { IsNotEmpty, IsString } from 'class-validator';

export class FindScheduledClassesDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;
}
