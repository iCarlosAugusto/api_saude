import { NewsService } from './news.service';
import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateNewsDto } from './dtos/create-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteNewsDto } from './dtos/delete-news.dto';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('/create')
  createNews(
    @Body() createNewsDto: CreateNewsDto,
  ) {
    return this.newsService.create(createNewsDto);
  }

  @Post('/findAll')
  async findNews() {
    return await this.newsService.findAll();
  }

  @Post("/delete")
  async delete(
    @Body() deleteNewsDto: DeleteNewsDto
  ) {
    return await this.newsService.delete(deleteNewsDto);
  }
}
