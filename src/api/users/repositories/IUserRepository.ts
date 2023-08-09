import { Client } from "@prisma/client";
import { CreateClientDto } from "../dto/create-client.dto";
import { UpdateClientDto } from "../dto/update-client.dto";

interface IClientRepository {
  create(data: CreateClientDto): Promise<Client>;
  findOne(id: string): Promise<Client>;
  update(data: UpdateClientDto): Promise<Client>;
}

export { IClientRepository }