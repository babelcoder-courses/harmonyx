import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { GoldsService } from './golds.service';
import { CreateGoldDto } from './dto/create-gold.dto';
import { UpdateGoldDto } from './dto/update-gold.dto';
import { UserRole } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller({
  version: '1',
  path: 'golds',
})
export class GoldsController {
  constructor(private readonly goldsService: GoldsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  create(@Body() form: CreateGoldDto) {
    return this.goldsService.create(form);
  }

  @Get()
  findAll() {
    return this.goldsService.findAll();
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() form: UpdateGoldDto) {
    return this.goldsService.update(+id, form);
  }
}
