import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in-dto/sign-in.dto';
import { SignUpDto } from './dto/sign-in-dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(form: SignUpDto) {
    return this.usersService.create(form);
  }

  async signIn(form: SignInDto) {
    const user = await this.usersService.findByEmail(form.email);
    if (!(await bcrypt.compare(form.password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      profile: user,
    };
  }
}
