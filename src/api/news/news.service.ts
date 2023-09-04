import { Injectable } from '@nestjs/common';
import { NewsRepository } from 'src/repositories/news.repository';
import { CreateNewsDto } from './dtos/create-news.dto';
import { DeleteNewsDto } from './dtos/delete-news.dto';

@Injectable()
export class NewsService {

  constructor(private newsRepository: NewsRepository){}

  async create(data: CreateNewsDto) {
    const news = await this.newsRepository.create(data); 
    return news;
  }

  async findAll() {
    const news = await this.newsRepository.findAll();
    return news;
  }
  
  async delete(data: DeleteNewsDto) {
    const news = await this.newsRepository.delete(data);
  }
}
