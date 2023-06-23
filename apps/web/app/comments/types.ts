import { UserDetails } from "@/app/users/types";

export interface CommentDetails {
  id: number;
  content: string;
  user: UserDetails;
}
