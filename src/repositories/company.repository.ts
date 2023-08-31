import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/api/company/dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from 'src/api/company/dtos/find-company-by-id.dto';
import { PrismaService } from 'src/api/users/services/prima.service';
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import fs from 'fs';
import { saveToBucket } from 'src/utils/saveToBucket';
import { DeleteCompanyDto } from 'src/api/company/dtos/delete-company.dto';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    { name, bannerImage, partnerId, address }: CreateCompanyDto,
    file: Express.Multer.File, 
    logoImage: Express.Multer.File
  ) {
    
    const url = await saveToBucket(file);
    const logoImageUrl = await saveToBucket(logoImage);
    return await this.prisma.company.create({
      data: {
        name,
        bannerImage: url,
        logoImage: logoImageUrl,
        partnerId,
        address
      }
    })
  }

  async delete({ companyId }: DeleteCompanyDto) {
    await this.prisma.company.delete({
      where: {
        id: companyId
      }
    });
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdDto) {
    return await this.prisma.company.findMany({
      where: {
        partnerId
      }
    })
  }

  // async findByDate({ date, partnerId }: FindCompaniesByDateDto) {
  //   return this.prisma.company.findMany({
  //     where: {
  //       partnerId
  //     }
  //   })
  // }

  async findOneById(id: string){
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    });
  }
}
