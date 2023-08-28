import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from 'src/api/news/dtos/create-news.dto';
import { PrismaService } from 'src/api/users/services/prima.service';
import { saveToBucket } from 'src/utils/saveToBucket';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async create({ title, description }: CreateNewsDto, file: Express.Multer.File,){
    const url = await saveToBucket(file);
    return await this.prisma.news.create({
      data: {
        title,
        description,
        imageUrl: url
      }
    });
  }

  async findAll() {
    return await this.prisma.news.findMany();
  }
}

