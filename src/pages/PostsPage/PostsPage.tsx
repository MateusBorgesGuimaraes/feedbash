import React from "react";
import stlyes from "./PostsPage.module.css";
import PostCard from "../../components/PostCard/PostCard";

const PostsPage = () => {
  return (
    <section className="container">
      <div className={stlyes.postPageGrig}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

export default PostsPage;
