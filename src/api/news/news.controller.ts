import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NewsEntity } from './entities/news.entity';
import { NewsService } from './news.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNewsDto } from './dtos/create-news.dto';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('/create')
  createNews(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get('/findAll')
  async findNews() {
    return await this.newsService.findAll();
  }
}
