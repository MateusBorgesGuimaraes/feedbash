import React from "react";
import stlyes from "./PostsPageCategory.module.css";
import PostCard from "../../components/PostCard/PostCard";
import { PostInterface } from "../../types";
import useFetch from "../../Hooks/useFetch";
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY } from "../../Api";
import { useParams } from "react-router-dom";

const PostsPageCategory = () => {
  const [posts, setPosts] = React.useState<PostInterface[] | null>(null);
  const { request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPosts() {
      if (!id) return;
      const { url, options } = GET_POSTS_BY_CATEGORY(id);
      const { response, json } = await request(url, options);
      if (response && response.ok) {
        setPosts(json);
      } else {
        console.error(json);
      }
    }
    fetchPosts();
  }, [request, id]);

  return (
    <section className="container">
      <div className={stlyes.postPageGrig}>
        {posts &&
          posts.map((post) => (
            <PostCard
              key={post._id}
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

export default PostsPageCategory;
