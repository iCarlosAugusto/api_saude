import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/utils/email.service';
import { PrismaService } from 'src/api/users/services/prima.service';
import { CreateConsultDto } from '../dto/create-consult.dto';
import { FindOneConsultDto } from '../dto/find-one-consult.dto';
import { FindAllClientConsultsDto } from '../dto/find-all-clients-consults.dto';
import { FindAllPartnerConsultsDto } from '../dto/find-all-partner-consults.dto';

@Injectable()
export class ConsultRepository {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService
  ) {}

  async create(data: CreateConsultDto) {
    await this.emailService.sendEmail(data.clientEmail, data.clientEmailMessage);
    await this.emailService.sendEmail(data.partnerEmail, data.partnerEmailMessage)
    const consult = await this.prisma.consult.create({
      data: {
        clientId: data.clientId,
        partnerId: data.partnerId,
        serviceId: data.serviceId,
        date: data.date,
      }
    });
    return consult;
  }

  async findOneConsult({ id }: FindOneConsultDto){
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
  }: FindAllClientConsultsDto) {
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
  }: FindAllPartnerConsultsDto) {
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
