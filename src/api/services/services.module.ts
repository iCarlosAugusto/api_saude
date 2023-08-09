import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceRepository } from './repositories/ServiceRepository';
import { PrismaService } from '../users/services/prima.service';
import { ServicesController } from './services.controller';

@Module({
  controllers: [
    ServicesController
  ],
  providers: [ServicesService, ServiceRepository, PrismaService]
})
export class ServicesModule {}
