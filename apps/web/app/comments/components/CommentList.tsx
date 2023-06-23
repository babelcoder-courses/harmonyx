"use client";
import useSWR from "swr";
import { getComments } from "../api";
import { Loading } from "ui";
import CommentItem from "./CommentItem";

interface CommentListProps {
  articleId: number;
}

const CommentList = ({ articleId }: CommentListProps) => {
  const { data: comments, isLoading } = useSWR(
    `/comments?articleId=${articleId}`,
    () => getComments(articleId)
  );

  if (isLoading) return <Loading></Loading>;
  if (!comments || comments.length === 0) return <div>No comments found.</div>;

  return (
    <section>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment}></CommentItem>
      ))}
    </section>
  );
};

export default CommentList;
