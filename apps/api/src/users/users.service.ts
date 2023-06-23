import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from 'src/auth/dto/sign-in-dto/sign-up.dto';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: User['id']) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: User['email']) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(form: SignUpDto) {
    return this.prisma.user.create({
      data: {
        name: form.name,
        email: form.email,
        password: await bcrypt.hash(form.password, 10),
      },
    });
  }
}
