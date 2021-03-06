// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

  return (
    <div key={props.postId}>
      {props.comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
