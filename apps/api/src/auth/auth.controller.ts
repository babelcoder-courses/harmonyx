import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInDto } from './dto/sign-in-dto/sign-in.dto';
import { SignUpDto } from './dto/sign-in-dto/sign-up.dto';
import { SigninResponseDto } from './dto/sign-in-dto/sign-in-response.dto';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() form: SignUpDto) {
    return this.authService.signUp(form);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(@Body() form: SignInDto) {
    const auth = await this.authService.signIn(form);
    return new SigninResponseDto(auth);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
