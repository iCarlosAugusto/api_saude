import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { EmailService } from 'src/utils/email.service';
import { ClassRepository } from 'src/repositories/class.repository';
import { ClientRepository } from 'src/repositories/client.repository';
import { ClassService } from './class.service';
import { CompanyRepository } from 'src/repositories/company.repository';
import { ClassController } from './class.controller';

@Module({
  controllers: [ClassController],
  providers: [
    PrismaService,
    CompanyRepository,
    PartnerRepository,
    EmailService,
    ClassService,
    ClassRepository,
    ClientRepository,
  ],
})
export class ClassModule {}
