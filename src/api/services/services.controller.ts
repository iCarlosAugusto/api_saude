import { ServicesService } from './services.service';
import { ServiceEntity } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { FindAllServicesDto } from './dto/find-all-services.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('/create')
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get('/findAll')
  findAll(@Body()  findAllServicesDto: FindAllServicesDto) {
    return this.servicesService.findAll(findAllServicesDto);
  }

  // @Get('/findOne')
  // findOne(@Body() id: number) {
  //   return this.servicesService.findOne(id);
  // }

  @Post('/update')
  update(@Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(updateServiceDto.id, updateServiceDto);
  }

  // @Post('/delete')
  // delete(@Body('id', { type: () => Int }) id: number) {
  //   return this.servicesService.remove(id);
  // }
}
