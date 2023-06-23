import { GoldType } from '@prisma/client';
import { IsIn, Min } from 'class-validator';

export class CreateGoldDto {
  @IsIn([96.5, 99])
  purify: number;

  @IsIn([GoldType.ORNAMENT, GoldType.BULLION])
  kind: GoldType;

  @Min(1)
  price: number;
}
