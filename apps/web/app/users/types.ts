import { UserRole } from "../auth/types";

export interface UserDetails {
  name: string;
  email: string;
  image: string;
  role: UserRole;
}
