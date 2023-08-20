import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Partner, Client } from '@prisma/client';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { FindOneParnetDto } from './dto/find-one-partner.dto';
import { FindAllParnerstDto } from './dto/find-all-partners.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { UpdatePasswordPartnerDto } from './dto/update-password-partner.dto';
import { FindClientsPartnerDto } from './dto/find-clients-partner.dto';
import { FindPartnerByRegisterCodeDto } from './dto/find-partner-by-register-code.dto';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { FindPartnersByCategoryDto } from './dto/find-partners-by-category.dto';

@Injectable()
export class PartnersService {
  constructor(private partnerRepository: PartnerRepository) {}

  async create(data: CreatePartnerDto) {
    const partner = await this.partnerRepository.create(data);
    return partner;
  }

  async findOne(data: FindOneParnetDto) {
    const partner = await this.partnerRepository.findOneById(data);
    return partner;
  }

  async findAll(data: FindAllParnerstDto) {
    const partner = await this.partnerRepository.findAll(data);
    return partner;
  }

  
  async findByCategory(data: FindPartnersByCategoryDto) {
    const partners = await this.partnerRepository.findByCategory(data);
    return partners;
  }

  async update(data: UpdatePartnerDto): Promise<Partner> {
    const partnerExists = await this.findOne({ id: data.id });
    if (!partnerExists) throw new Error('Parceiro não encontrado');
    const partnerUpdated = await this.partnerRepository.update(data);
    return partnerUpdated;
  }

  async updatePassword({
    id,
    currentPassword,
    newPassword,
  }: UpdatePasswordPartnerDto): Promise<Partner> {
    const partnerExists = await this.partnerRepository.findOneById({ id });
    if (!partnerExists) throw new Error('Parceiro não encontrado');
    const updatedPartnerPassword = await this.partnerRepository.updatePassword({
      id,
      currentPassword,
      newPassword,
    });
    return updatedPartnerPassword;
  }

  async findClientsPartner(data: FindClientsPartnerDto) {
    const partner = await this.partnerRepository.findOneById({
      id: data.partnerId,
    });
    if (!partner)
      throw new HttpException(
        'Não foi possível criar a aula pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    const clients = await this.partnerRepository.findClientsPartner(data);
    return clients;
  }

  async findByRegisterCode(data: FindPartnerByRegisterCodeDto) {
    const partner = await this.partnerRepository.findByRegisterCode(data);
    return partner;
  }
}
