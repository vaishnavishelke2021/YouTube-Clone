import React from "react";
import commentsData from "../utils/comments.json";
import { CommentList } from "./Comment";

const CommentsContainer = () => {
  return (
    <div className="mb-7">
      <h2 className="text-[1.4rem] font-bold py-2 mt-6 mb-3">Comments</h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
