import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/users/services/prima.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { FindAllServicesDto } from '../dto/find-all-services.dto';
import { FindByPartnerIdDto } from '../dto/find-by-partnerId.dto';
import { saveToBucket } from 'src/utils/saveToBucket';

@Injectable()
class ServiceRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateServiceDto, file: Express.Multer.File) {

    const url = await saveToBucket(file);
    const service = await this.prisma.service.create({ 
      data: {
        ...data,
        bannerImage: url 
      }
     });
    return service;
  }
  
  async findByPartnerId({ partnerId }: FindByPartnerIdDto) {
    const services = await this.prisma.service.findMany({
      where: {
        partnerId: partnerId
      }
    });
    return services;
  }

  async findAll({ skip }: FindAllServicesDto) {
    const services = await this.prisma.service.findMany({
      include: {
        consult: false,
        partner: true,
      }
  });
  return services;
  }
}

export { ServiceRepository };