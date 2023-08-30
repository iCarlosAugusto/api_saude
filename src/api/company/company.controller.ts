import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { Body, Controller, Get, HttpException, HttpStatus, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from './dtos/find-company-by-id.dto';
import { FindCompaniesByDateDto } from './dtos/find-companies-by-date.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('upload')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1 },
    { name: 'background', maxCount: 1 },
  ]))
  uploadFile(@UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
    console.log(files);
  }
  


  @Post('/create')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'file', maxCount: 1 },
    { name: 'logoImage', maxCount: 1 },
  ]))
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFiles() files: { file?: Express.Multer.File[], logoImage?: Express.Multer.File[] },
  ) {

    if(!files.file) {
      throw new HttpException(
        'Faltando o imagem de logo',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(!files.file) {
      throw new HttpException(
        'Faltando o arquivo de imagem',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.companyService.create(createCompanyDto, files.file[0], files.logoImage[0]);
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
