import { Module } from '@nestjs/common';
import { GoldsService } from './golds.service';
import { GoldsController } from './golds.controller';
import { SharedModule } from 'src/shared/shared.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SharedModule, UsersModule],
  controllers: [GoldsController],
  providers: [GoldsService],
})
export class GoldsModule {}
