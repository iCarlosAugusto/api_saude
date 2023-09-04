import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from 'src/api/news/dtos/create-news.dto';
import { DeleteNewsDto } from 'src/api/news/dtos/delete-news.dto';
import { PrismaService } from 'src/api/users/services/prima.service';
import { saveToBucket } from 'src/utils/saveToBucket';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNewsDto){
    //const url = await saveToBucket(file);
    return await this.prisma.news.create({
      data: data
    });
  }

  async findAll() {
    return await this.prisma.news.findMany();
  }

  async delete({ id }: DeleteNewsDto) {
    return await this.prisma.news.delete({
      where: {
        id
      }
    })
  }
}

