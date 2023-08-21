import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { ClientRepository } from '../../repositories/client.repository';
import { Client } from '@prisma/client';
import { EmailService } from 'src/utils/email.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdatePasswordClientDto } from './dto/update-password-client.dto';
import { ResetClientPasswordDto } from './dto/reset-client-password.dto';
import { FavoritePartnerDto } from './dto/favorite-partner.dto';
import { GetFavoritePartnersDto } from './dto/get-favorite-partners.dto';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService, 
    private clientRepository: ClientRepository,
    private emailService: EmailService,
  ) {}

  async create(data: CreateClientDto): Promise<Client> {
    const client = await this.clientRepository.create(data);
    return client;
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne(id);
    if(!client){
      throw new Error('Cliente não encontrado');
    }
    return client;
  }

  async findAll() {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  async update(updateClientDto: UpdateClientDto): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(updateClientDto.id);
    if(!isClientExists) throw new Error("Cliente não encontrado");
    const updatedClient = await this.clientRepository.update(updateClientDto);
    return updatedClient;
  }

  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordClientDto): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(id);
    if(!isClientExists) throw new HttpException("Cliente não encontrado", 404);
    const updatedClintPassword = await this.clientRepository.updatePassword({id, currentPassword, newPassword});
    return updatedClintPassword;
  }

  async resetPassword({ email }: ResetClientPasswordDto) {
    const newPassword = Math.floor(1000 + Math.random() * 9000).toString();

    const client = await this.clientRepository.findOneByEmail(email);
    if(!client) throw new HttpException("Email não encontrado em nossa base de dados", 404);

    await this.clientRepository.resetPassword(client.id, newPassword);

    await this.emailService.sendEmailToResetPassword({
      email,
      newPassword 
    });
    return 'Sucesso!';
  }

  async favoritePartner(data: FavoritePartnerDto) {
    return await this.clientRepository.favoritePartner(data);
  }

  async findFavoritePartners(data: GetFavoritePartnersDto) {
    return await this.clientRepository.findFavoritePartners(data);
  }
}
