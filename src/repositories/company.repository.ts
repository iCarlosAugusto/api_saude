import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/api/company/dtos/create-company.dto';
import { FindCompanyByPartnerIdDto } from 'src/api/company/dtos/find-company-by-id.dto';
import { PrismaService } from 'src/api/users/services/prima.service';
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import fs from 'fs';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, bannerImage, logoImage, partnerId, address }: CreateCompanyDto, file: Express.Multer.File) {
    
    const fileUpload = getStorage().bucket().file("images/companhias/"+file.originalname);
    await fileUpload.save(file.buffer);
    const url = await getDownloadURL(fileUpload);

    return await this.prisma.company.create({
      data: {
        name,
        bannerImage: url,
        logoImage,
        partnerId,
        address
      }
    })
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
