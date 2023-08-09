import { ConsultsService } from './consults.service';
import { CreateConsultDto } from './dto/create-consult.dto';
import { FindAllClientConsultsDto } from './dto/find-all-clients-consults.dto';
import { FindAllPartnerConsultsDto } from './dto/find-all-partner-consults.dto';
import { FindOneConsultDto } from './dto/find-one-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/consults')
export class ConsultsController {
  constructor(private readonly consultsService: ConsultsService) {}

  @Post('/create')
  create(@Body() createConsultInput: CreateConsultDto) {
    return this.consultsService.create(createConsultInput);
  }

  @Get('/findAll')
  findAll(@Body() findAllClientConsults: FindAllClientConsultsDto,
  ) {
    return this.consultsService.findAllClientConsults(findAllClientConsults);
  }

  @Get('/findAllParterConsults')
  findAllPartnerConsults(@Body() findAllPartnerConsults: FindAllPartnerConsultsDto) {
    return this.consultsService.findAllPartnerConsults(findAllPartnerConsults);
  }

  @Get('/findOneConsult')
  findOne(@Body() findOneConsultDto: FindOneConsultDto) {
    return this.consultsService.findOne(findOneConsultDto);
  }

  @Post('/update')
  update(@Body() updateConsultDto: UpdateConsultDto) {
    return this.consultsService.update(
      updateConsultDto.id,
      updateConsultDto,
    );
  }

  // @Post('/create')
  // removeConsult(@Body() { type: () => Int }) id: number) {
  //   return this.consultsService.remove(id);
  // }
}
