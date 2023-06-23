export type UserRole = "ADMIN" | "MODERATOR" | "MEMBER";

export interface Signin {
  email: string;
  password: string;
}

export interface Signup extends Signin {
  name: string;
}
