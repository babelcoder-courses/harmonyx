import { Exclude } from 'class-transformer';

export class UserDto {
  name: string;

  email: string;

  image: string;

  role: string;

  @Exclude()
  password: string;
}
