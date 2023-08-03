import { ObjectType, Field } from '@nestjs/graphql';
import { ConsultEntity } from 'src/api/consults/entities/consult.entity';

@ObjectType()
export class PartnerEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  identification: string;

  @Field(() => String)
  registerCode: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => [ConsultEntity], { nullable: true })
  consults: ConsultEntity[];

  @Field(() => String)
  password: String
}
