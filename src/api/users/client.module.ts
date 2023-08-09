import { Module } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { ClientRepository } from '../../repositories/client.repository';
import { ClientService } from './client.service';
import { EmailService } from 'src/utils/email.service';
import { ClientController } from './client.controller';

@Module({
  controllers: [
    ClientController,
  ],
  providers: [ClientService, PrismaService, ClientRepository, EmailService],
})
export class ClientsModule {}
