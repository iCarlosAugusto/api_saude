import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindPartnerByRegisterCode {
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  code: string;
}
