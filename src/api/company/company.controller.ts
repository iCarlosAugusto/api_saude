import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { Body, Controller, Get, HttpException, HttpStatus, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from './dtos/find-company-by-id.dto';
import { FindCompaniesByDateDto } from './dtos/find-companies-by-date.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('/create')
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if(!file) {
      throw new HttpException(
        'Faltando o arquivo de imagem',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.companyService.create(createCompanyDto, file);
  }

  @Post('/findByPartnerId')
  findByPartnerId(
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
