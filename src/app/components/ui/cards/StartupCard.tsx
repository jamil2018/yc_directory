import { StartupCardType } from "@/types/data/Posts";
import React from "react";

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};

export default StartupCard;
