import { CommentDetails } from "../types";

const CommentItem = ({ user, content }: CommentDetails) => {
  return (
    <article className="border-b-2">
      <p>{user.name}</p>
      <p>{content}</p>
    </article>
  );
};

export default CommentItem;
