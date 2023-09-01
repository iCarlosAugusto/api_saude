import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/users/services/prima.service';
import { Partner } from '@prisma/client';
import { EmailService } from 'src/utils/email.service';
import { UpdatePartnerDto } from 'src/api/partners/dto/update-partner.dto';
import { UpdatePasswordPartnerDto } from 'src/api/partners/dto/update-password-partner.dto';
import { FindOneParnetDto } from 'src/api/partners/dto/find-one-partner.dto';
import { FindAllParnerstDto } from 'src/api/partners/dto/find-all-partners.dto';
import { FindPartnerByRegisterCodeDto } from 'src/api/partners/dto/find-partner-by-register-code.dto';
import { FindClientsPartnerDto } from 'src/api/partners/dto/find-clients-partner.dto';
import { CreatePartnerDto } from 'src/api/partners/dto/create-partner.dto';
import { FindPartnersByCategoryDto } from 'src/api/partners/dto/find-partners-by-category.dto';
import { saveToBucket } from 'src/utils/saveToBucket';

@Injectable()
export class PartnerRepository {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(data: CreatePartnerDto)
  : Promise<Partner> {
    const firstPartnerPassword = Math.floor(
      1000 + Math.random() * 9000,
    ).toString();

    const partner = await this.prisma.partner.create({
      data: {
        identification: data.identification,
        regiterCode: data.registerCode,
        password: firstPartnerPassword,
        email: data.email,
        name: data.name,
        photo: data.photo,
        phoneNumber: data.phoneNumber,
        categories: data.categories,
        consultPriceMedium: data.consultPriceMedium,
        consultTimeMedium: data.consultPriceMedium,
        description: data.description
      },
    });
    await this.emailService.sendEmailToResetPassword({
      email: data.email,
      newPassword: firstPartnerPassword,
    });
    return partner;
  }

  async update(data: UpdatePartnerDto): Promise<Partner> {
    const partnerUpdated = await this.prisma.partner.update({
      where: { id: data.id },
      data: {
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        photo: data.photo,
      },
    });
    return partnerUpdated;
  }

  async updatePassword({
    id,
    currentPassword,
    newPassword,
  }: UpdatePasswordPartnerDto): Promise<Partner> {
    const partner = await this.prisma.partner.findUnique({
      where: {
        id: id,
      },
    });
    if (partner.password !== currentPassword)
      throw new Error('Senha atual incorreta');
    const updatedPasswordPartner = await this.prisma.partner.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
      },
    });

    return updatedPasswordPartner;
  }

  async findByCategory({ category }: FindPartnersByCategoryDto) {
    const partners = await this.prisma.partner.findMany({
      where: {
        categories: {
          has: category
        }
      }
    });
    return partners;
  }

  async findOneById({ id }: FindOneParnetDto): Promise<Partner> {
    const partner = await this.prisma.partner.findUnique({
      where: {
        id,
      },
    });
    return partner;
  }

  async findAll({ skip }: FindAllParnerstDto): Promise<Partner[]> {
    const partners = await this.prisma.partner.findMany({
      skip: skip == null ? 0 : skip,
      take: 10,
    });
    return partners;
  }

  async findByRegisterCode({ code }: FindPartnerByRegisterCodeDto) {
    const partner = await this.prisma.partner.findUnique({
      where: {
        regiterCode: code,
      },
    });

    return partner;
  }

  //REFAZER
  async findClientsPartner({ partnerId }: FindClientsPartnerDto) {
    const { clients } = await this.prisma.partner.findFirst({
      select: {
        clients: true,
      },
      where: {
        id: partnerId,
      },
    });
    return clients;
  }
}
