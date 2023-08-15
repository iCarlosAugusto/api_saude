import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/repositories/company.repository';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from './dtos/find-company-by-id.dto';
import { FindCompaniesByDateDto } from './dtos/find-companies-by-date.dto';

@Injectable()
export class CompanyService {
  constructor(
    private companyRepository: CompanyRepository,
    private partnerRepository: PartnerRepository,
  ) {}

  async create(data: CreateCompanyDto) {

    const partner = await this.partnerRepository.findOneById({id: data.partnerId});

    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.create(data);

    return company;
  }

  async findAll() {
    const companies = await this.companyRepository.findAll();
    return companies;
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdDto) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});
    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.findByPartnerId({partnerId})
    return company;
  }

  async findByDate({ date, partnerId }: FindCompaniesByDateDto) {
    console.log("Todo - implementar...");
    // const partner = await this.partnerRepository.findOneById({id: partnerId});
    // if(!partner){
    //   throw new HttpException(
    //     'Não foi possível criar a companhia pelo id do parceiro fornecido',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    // const company = await this.companyRepository.findByDate({
    //   date, partnerId
    // });
    // return company;
  }
}
