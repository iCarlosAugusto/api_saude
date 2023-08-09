import { Module } from '@nestjs/common';
import { NewsRepository } from 'src/repositories/news.repository';
import { PrismaService } from '../users/services/prima.service';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  controllers: [NewsController],
  providers: [NewsModule, NewsService, NewsRepository, PrismaService],
})
export class NewsModule {}
