import React from "react";
import stlyes from "./PostsPage.module.css";
import PostCard from "../../components/PostCard/PostCard";
import { PostInterface } from "../../types";
import useFetch from "../../Hooks/useFetch";
import { GET_ALL_POSTS } from "../../Api";

const PostsPage = () => {
  const [posts, setPosts] = React.useState<PostInterface[] | null>(null);
  const { request } = useFetch();

  React.useEffect(() => {
    async function fetchPosts() {
      const { url, options } = GET_ALL_POSTS();
      const { response, json } = await request(url, options);
      if (response && response.ok) {
        setPosts(json);
      } else {
        console.error(json);
      }
    }
    fetchPosts();
  }, [request]);

  console.log(posts);

  return (
    <section className="container">
      <div className={stlyes.postPageGrig}>
        {posts &&
          posts.map((post) => (
            <PostCard
              name={post.name}
              id={post._id}
              category={post.category}
              scope={post.scope}
              author={post.author}
              focus={post.focus}
            />
          ))}
      </div>
    </section>
  );
};

export default PostsPage;
