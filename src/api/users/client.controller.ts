import { CreateClientDto } from './dto/create-client.dto';
import { ClientService } from './client.service';
import {  Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdatePasswordClientDto } from './dto/update-password-client.dto';
import { ResetClientPasswordDto } from './dto/reset-client-password.dto';

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

  // @Get('/findOne/:id')
  // findOneClient(@Body(, { type: () => String }) id: string) {
  //   return this.clientsService.findOne(id);
  // }

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
}
