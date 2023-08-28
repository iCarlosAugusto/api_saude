import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NewsEntity } from './entities/news.entity';
import { NewsService } from './news.service';
import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateNewsDto } from './dtos/create-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('/create')
  createNews(
    @Body() createNewsDto: CreateNewsDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if(!file) {
      throw new HttpException(
        'Faltando o arquivo de imagem',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.newsService.create(createNewsDto, file);
  }

  @Post('/findAll')
  async findNews() {
    return await this.newsService.findAll();
  }
}
