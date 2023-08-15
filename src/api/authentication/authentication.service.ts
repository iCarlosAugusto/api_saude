import { Injectable } from '@nestjs/common';
import { AuthenticationRepository } from './repository/authentication.repository';
import { AuthenticationDto } from './dto/authentication.dto';

@Injectable()
export class AuthenticationService {
  constructor(private authenticationRepository: AuthenticationRepository) {}

  async authenticate(authenticateInput: AuthenticationDto) {
    return await this.authenticationRepository.authenticate(authenticateInput);
  }
}
