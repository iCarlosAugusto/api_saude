import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { AuthenticationService } from './authentication.service';
import { AuthenticationRepository } from './repository/authentication.repository';
import { AuthenticationController } from './authentication.controller';

@Module({
  controllers: [
    AuthenticationController
  ],
  providers: [
    AuthenticationService,
    PrismaService,
    AuthenticationRepository
  ]
})
export class AuthenticationModule {}