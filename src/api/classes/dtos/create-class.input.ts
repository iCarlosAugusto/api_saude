import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  description : string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  lots: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  startAt: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  address: string; 
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  place: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  bannerImage?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  teacherName: string;
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  companyId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  dateTimestamp: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  date: string;
}
