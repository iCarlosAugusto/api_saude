import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from './dtos/find-company-by-id.dto';
import { FindCompaniesByDateDto } from './dtos/find-companies-by-date.dto';

@Controller('/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create')
  create(
    @Body() createCompanyDto: CreateCompanyDto,
  ) {
    return this.companyService.create(createCompanyDto);
  }

  @Get('/findById')
  findById(
    @Body() findCompanyByPartnerId: FindCompanyByPartnerIdDto
  ) {
    return this.companyService.findByPartnerId(findCompanyByPartnerId);
  }

  @Get('/findAll')
  findAll() {
    return this.companyService.findAll();
  }


  @Get('/findByDate')
  findCompaniesByDate(
    @Body() findCompaniesByDateDto: FindCompaniesByDateDto,
  ) {
    return this.companyService.findByDate(findCompaniesByDateDto);
  }
}
