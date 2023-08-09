import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/users/services/prima.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { FindAllServicesDto } from '../dto/find-all-services.dto';

@Injectable()
class ServiceRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateServiceDto) {
    const service = await this.prisma.service.create({ data });
    return service;
  }

  async findAll({ skip }: FindAllServicesDto) {
    const services = await this.prisma.service.findMany({
      skip: skip == null ? 0 : skip,
      take: 10,
      include: {
        consult: true,
        partner: true,
      }
  });
  return services;
  }
}

export { ServiceRepository };