import { Module, ValidationPipe } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [ ApiModule ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
