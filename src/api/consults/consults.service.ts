import { Injectable } from '@nestjs/common';
import { ConsultRepository } from './repository/consult.repository';
import { CreateConsultDto } from './dto/create-consult.dto';
import { FindAllClientConsultsDto } from './dto/find-all-clients-consults.dto';
import { FindAllPartnerConsultsDto } from './dto/find-all-partner-consults.dto';
import { FindOneConsultDto } from './dto/find-one-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';

@Injectable()
export class ConsultsService {
  constructor(private consultRepository: ConsultRepository) {}

  async create(createConsultDto: CreateConsultDto) {
    return await this.consultRepository.create(createConsultDto);
  }

  async findAllClientConsults(findAllClientConsults: FindAllClientConsultsDto) {
    return await this.consultRepository.findAllClientConsults(
      findAllClientConsults,
    );
  }

  async findAllPartnerConsults(findAllPartnerConsults: FindAllPartnerConsultsDto) {
    return await this.consultRepository.findAllPartnerConsults(
      findAllPartnerConsults,
    );
  }

  async findOne(findOneConultDto: FindOneConsultDto) {
    return await this.consultRepository.findOneConsult(findOneConultDto);
  }

  update(id: number, updateConsultDto: UpdateConsultDto) {
    return `This action updates a #${id} consult`;
  }

  remove(id: number) {
    return `This action removes a #${id} consult`;
  }
}
