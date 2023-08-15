import { Field } from '@nestjs/graphql';

export class CompanyEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  bannerImage: String;

  @Field(() => String)
  partnerId: String;
}
