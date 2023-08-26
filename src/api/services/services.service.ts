import { Injectable } from '@nestjs/common';
import { ServiceRepository } from './repositories/ServiceRepository';
import { CreateServiceDto } from './dto/create-service.dto';
import { FindAllServicesDto } from './dto/find-all-services.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FindByPartnerIdDto } from './dto/find-by-partnerId.dto';

@Injectable()
export class ServicesService {
  
  constructor(
    private serviceRepository: ServiceRepository 
  ) {}

  create(createServiceDto: CreateServiceDto, file: Express.Multer.File,) {
    return this.serviceRepository.create(createServiceDto, file);
  }

  findAll(findAllServicesDto: FindAllServicesDto) {
    return this.serviceRepository.findAll(findAllServicesDto)
  }

  findByPartnerId(findByPartnerIdDto: FindByPartnerIdDto) {
    return this.serviceRepository.findByPartnerId(findByPartnerIdDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
