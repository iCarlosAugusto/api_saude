import { Injectable } from '@nestjs/common';
import { CreateConsultInput } from '../dto/create-consult.input';
import { PrismaService } from 'src/models/users/services/prima.service';
import { FindAllClientConsultsInput } from '../dto/find-all-clients-consults.input';
import { FindOneConsultInput } from '../dto/find-one-consult.input';
import { FindAllPartnerConsultsInput } from '../dto/find-all-partner-consults.input';

@Injectable()
export class ConsultRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateConsultInput) {
    const consult = await this.prisma.consult.create({
      data
    });
    return consult;
  }

  async findOneConsult({ id }: FindOneConsultInput){
    const consult = await this.prisma.consult.findUnique({
      where: {
        id
      }
    });
    return consult;
  }

  async findAllClientConsults({
    clientId,
    isFinished,
    skip,
    startDateTimestamp,
    limitDateTimestamp
  }: FindAllClientConsultsInput) {
    console.log(isFinished);
    const consults = await this.prisma.consult.findMany({
      where: {
        clientId: clientId,
        isFinished,
        //createdAt: {
        //  gte: new Date(startDateTimestamp).toISOString(),
        //  lte: new Date(limitDateTimestamp).toISOString()
        //}
      },
      skip,
      take: 10,
      include: {
        client: true,
        partner: true,
        service: true,
      }
    });
    return consults;
  }

  async findAllPartnerConsults({
    partnerId,
    isFinished,
    skip,
    startDateTimestamp,
    limitDateTimestamp
  }: FindAllPartnerConsultsInput) {
    const consults = await this.prisma.consult.findMany({
      where: {
        partnerId: partnerId,
        isFinished,
        //createdAt: {
        //  gte: new Date(startDateTimestamp).toISOString(),
        //  lte: new Date(limitDateTimestamp).toISOString()
        //}
      },
      skip,
      take: 10,
      include: {
        client: true,
        partner: true,
        service: true,
      }
    });

    return consults;
  }
}
