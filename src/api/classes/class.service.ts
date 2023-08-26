import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClassRepository } from 'src/repositories/class.repository';
import { ClientRepository } from 'src/repositories/client.repository';
import { CompanyRepository } from 'src/repositories/company.repository';
import { CreateClassDto } from './dtos/create-class.dto';
import { UpdateClassDto } from './dtos/update-class.dto';
import { DeleteClassDto } from './dtos/delete-class.dto';
import { FindAllClassesDto } from './dtos/find-all-classes.dto';
import { FindAllClassesByDateDto } from './dtos/find-classes_by_date.dto';
import { BookClassDto } from './dtos/book-class.dto';
import { FindNextClientClassDto } from './dtos/find-next-client-class.dto';
import { CancelClientClassDto } from './dtos/cancel-client-class.dto';
import { FindAllClientsOnClassDto } from './dtos/find-all-clients-on-class.dto';
import { FindScheduledClassesDto } from './dtos/findScheduledClasses.dto';
import { FindScheduledClassesAndConsultsDto } from './dtos/find-scheduled-classes-and-consults.dto';

@Injectable()
export class ClassService {
  constructor(
    private companyRepository: CompanyRepository,
    private classRepository: ClassRepository,
    private clientRepository: ClientRepository,
  ) {}

  async createClass(data: CreateClassDto,  file: Express.Multer.File) {
    const company = await this.companyRepository.findOneById(data.companyId);

    if (!company) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classFound = await this.classRepository.createClass(data, file);

    return classFound;
  }
  
  async update(data: UpdateClassDto) {
    const classExists = this.classRepository.findClassById(data.classId);
    if (!classExists) throw new HttpException('Companhia não existente', 404);
    const classUpdated = await this.classRepository.update(data);
    return classUpdated;
  }

  async delete(data: DeleteClassDto) {
    const classExists = this.classRepository.findClassById(data.classId);
    if (!classExists) throw new HttpException('Companhia não existente', 404);
    await this.classRepository.delete(data);
    return 'Deletado com sucesso!';
  }

  async findAllClassses(data: FindAllClassesDto) {
    const company = await this.companyRepository.findOneById(data.companyId);
    if (!company) throw new HttpException('Companhia não existente', 404);
    const classes = await this.classRepository.findAllClasses(data);
    return classes;
  }

  async findAllClassesByDate(data: FindAllClassesByDateDto) {
    const classes = await this.classRepository.findAllClassesByDate(data);
    return classes;
  }

  async bookClass({ classId, clientId }: BookClassDto) {
    const classFound = await this.classRepository.findClassById(classId);
    const client = await this.clientRepository.findOne(clientId);

    if (!classFound || !client) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classBooked = await this.classRepository.bookClass({
      classId,
      clientId,
    });
    return classBooked;
  }

  async findNextClientClass({ clientId }: FindNextClientClassDto) {
    const client = await this.clientRepository.findOne(clientId);

    if (!client) {
      throw new HttpException(
        'Não foi possível encontrar a aula pelo id do cliente fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classFound = await this.classRepository.findNextClientClass({
      clientId,
    });
    return classFound;
  }

  async cancelClass({ classId, clientId }: CancelClientClassDto) {
    const client = await this.clientRepository.findOne(clientId);
    const classFound = await this.classRepository.findClassById(classId);
    if (!client || !classFound) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classCanceled = await this.classRepository.cancelClass({
      classId,
      clientId,
    });
    return classCanceled;
  }

  async findClientsOnClass({ classId }: FindAllClientsOnClassDto) {
    const clients = await this.classRepository.findClientsOnClass(classId);
    return clients;
  }

  async findScheduledClasses(data: FindScheduledClassesDto) {
    const classes = await this.classRepository.findScheduledClasses(data);
    return classes;
  }

  async findScheduledClassesAndServices(data: FindScheduledClassesAndConsultsDto) {
    const classes = await this.classRepository.findScheduledClassesAndConsults(data);
    return classes;
  }
}
