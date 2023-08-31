import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteCompanyDto {

  @IsNotEmpty()
  @IsString()
  companyId: string;

}
