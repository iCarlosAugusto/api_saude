import { CreateClientDto } from './dto/create-client.dto';
import { ClientService } from './client.service';
import {  Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdatePasswordClientDto } from './dto/update-password-client.dto';
import { ResetClientPasswordDto } from './dto/reset-client-password.dto';
import { FavoritePartnerDto } from './dto/favorite-partner.dto';
import { GetFavoritePartnersDto } from './dto/get-favorite-partners.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientsService: ClientService) {}

  @Get('/findAll')
  findAllClient() {
    return this.clientsService.findAll();
  }

  @Post('/create')
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }


  @Post("/findFavotiresPartners")
  findFavotiresPartners(@Body() getFavoritePartnersDto: GetFavoritePartnersDto) {
    return this.clientsService.findFavoritePartners(getFavoritePartnersDto);
  }

  @Post('/update')
  updateClient(@Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(updateClientDto);
  }

  @Post('/updatePassword')
  updatePasswordClient(@Body() updatePasswordDto: UpdatePasswordClientDto) {
    return this.clientsService.updatePassword(updatePasswordDto)
  }

  @Post('/resetPassword')
  resetClientPassword(
    @Body() resetClientPassword: ResetClientPasswordDto
  ) {
    return this.clientsService.resetPassword(resetClientPassword);
  }

  @Post("/favoritePartner")
  favoritePartner(
    @Body() favoritePartnerDto: FavoritePartnerDto
  ){
    return this.clientsService.favoritePartner(favoritePartnerDto);
  }
}
