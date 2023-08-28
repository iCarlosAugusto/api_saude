import { Injectable } from '@nestjs/common';
import { NewsRepository } from 'src/repositories/news.repository';
import { CreateNewsDto } from './dtos/create-news.dto';

@Injectable()
export class NewsService {

  constructor(private newsRepository: NewsRepository){}

  async create(data: CreateNewsDto, file: Express.Multer.File,) {
    const news = await this.newsRepository.create(data, file); 
    return news;
  }

  async findAll() {
    const news = await this.newsRepository.findAll();
    return news;
  }
}
