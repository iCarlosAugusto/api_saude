import { Module } from '@nestjs/common';
import { ConsultsService } from './consults.service';
import { PrismaService } from '../users/services/prima.service';
import { ConsultRepository } from './repository/consult.repository';
import { EmailService } from 'src/utils/email.service';
import { ConsultsController } from './consults.controller';

@Module({
  controllers: [ConsultsController],
  providers: [ConsultsService, PrismaService, ConsultRepository, EmailService],
})
export class ConsultsModule {}
