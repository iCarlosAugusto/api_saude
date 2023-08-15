import { AuthenticationService } from './authentication.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationDto } from './dto/authentication.dto';

@Controller("/authentication")
export class AuthenticationController {
  constructor(private readonly authenticateService: AuthenticationService) {}

  @Post("/login")
  authenticate(@Body() authenticateDto: AuthenticationDto) {
    return this.authenticateService.authenticate(authenticateDto);
  }
}
