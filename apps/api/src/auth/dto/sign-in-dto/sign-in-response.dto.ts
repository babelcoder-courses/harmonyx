import { User } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/user.dto';

export class SigninResponseDto {
  accessToken: string;

  @Type(() => UserDto)
  profile: User;

  constructor(profile: SigninResponseDto) {
    Object.assign(this, profile);
  }
}
