import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from 'src/api/news/dtos/create-news.dto';
import { PrismaService } from 'src/api/users/services/prima.service';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async create({ title, description, imageUrl }: CreateNewsDto){
    return await this.prisma.news.create({
      data: {
        title,
        description,
        imageUrl
      }
    });
  }

  async findAll() {
    return await this.prisma.news.findMany();
  }
}

