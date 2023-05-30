import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class FindAllClassesInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  companyId: string;
}
