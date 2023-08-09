import { Body, Controller, Get, Post } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { FindOneParnetDto } from './dto/find-one-partner.dto';
import { FindAllParnerstDto } from './dto/find-all-partners.dto';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { FindClientsPartnerDto } from './dto/find-clients-partner.dto';
import { UpdatePasswordPartnerDto } from './dto/update-password-partner.dto';
import { FindPartnerByRegisterCodeDto } from './dto/find-partner-by-register-code.dto';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get('/findOne')
  findOnePartner(@Body() findOnePartnerDto: FindOneParnetDto) {
    return this.partnersService.findOne(findOnePartnerDto);
  }

  @Get('/findAll')
  findAllPartners(@Body() findAllParnerstDto: FindAllParnerstDto) {
    return this.partnersService.findAll(findAllParnerstDto);
  }

  @Post('/create')
  createPartner(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Post('/update')
  updatePartner(@Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnersService.update(updatePartnerDto);
  }

  @Post('/updatePassword')
  updatePasswordPartner(
    @Body()
    updatePasswordDto: UpdatePasswordPartnerDto,
  ) {
    return this.partnersService.updatePassword(updatePasswordDto);
  }

  @Get('/findClientsPartner')
  findAllClientsPartner(
    @Body()
    findAllClientsPartnerDto: FindClientsPartnerDto,
  ) {
    return this.partnersService.findClientsPartner(findAllClientsPartnerDto);
  }

  @Get('/findPartnerRegisterCode')
  findPartnerByRegisterCode(
    @Body()
    findPartnerByRegisterCode: FindPartnerByRegisterCodeDto,
  ) {
    return this.partnersService.findByRegisterCode(findPartnerByRegisterCode);
  }
}
