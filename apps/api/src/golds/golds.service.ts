import { Injectable } from '@nestjs/common';
import { UpdateGoldDto } from './dto/update-gold.dto';
import { PrismaService } from 'src/shared/prisma.service';
import { CreateGoldDto } from './dto/create-gold.dto';

@Injectable()
export class GoldsService {
  constructor(private prisma: PrismaService) {}

  create(form: CreateGoldDto) {
    return this.prisma.gold.create({
      data: form,
    });
  }

  findAll() {
    return this.prisma.gold.findMany();
  }

  update(id: number, form: UpdateGoldDto) {
    return this.prisma.gold.update({
      where: { id },
      data: form,
    });
  }
}
