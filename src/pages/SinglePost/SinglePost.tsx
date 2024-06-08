import React from "react";
import styles from "./SinglePost.module.css";
import { assets } from "../../assets/assets";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import ShowStar from "../../components/ShowStar/ShowStar";
import Comment from "../../components/Comment/Comment";
import CommentPost from "../../components/CommentPost/CommentPost";
import { useParams } from "react-router-dom";
import { PostInterface } from "../../types";
import useFetch from "../../Hooks/useFetch";
import { GET_POST } from "../../Api";

const SinglePost = () => {
  const [post, setPost] = React.useState<PostInterface | null>(null);
  const [image, setImage] = React.useState("");
  const { request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      const { url, options } = GET_POST(id);
      const { response, json } = await request(url, options);
      if (response && response.ok) {
        setPost(json);
      } else {
        console.error(json);
      }
    }
    fetchPost();
  }, [request, id]);

  React.useEffect(() => {
    if (post) {
      defineImg(post.category);
    }
  }, [post]);

  function defineImg(category: string) {
    switch (category) {
      case "video":
        setImage(assets.videos);
        break;
      case "art":
        setImage(assets.art);
        break;
      case "writing":
        setImage(assets.write);
        break;
      case "photo":
        setImage(assets.photo);
        break;
      default:
        setImage(assets.userTest1);
        break;
    }
  }

  return (
    <section className="container">
      <div className={styles.postHeaderLayout}>
        <div>
          <img src={image} alt="" />
        </div>
        <div className={styles.postHeader}>
          <p>
            <span>Nome autor(a):</span> {post?.author}
          </p>
          <p>
            <span>Categoria:</span> {post?.category}
          </p>
          <p>
            <span>Foco da analise:</span> {post?.focus}
          </p>
          <p>
            <span>Ambito:</span> {post?.scope}
          </p>

          <a href={post?.link}>clique aqui para acessar o conteudo</a>
        </div>
      </div>

      <div className={styles.rating}>
        <TitleComponent>
          <img src={assets.decTitlePurple} alt="" /> <h1>CLASSIFICAÇÃO </h1>
        </TitleComponent>

        <div>
          <ShowStar sizeStar="2.5rem" />
          <p>4/5</p>
        </div>
      </div>

      <div className={styles.commentsSection}>
        <h3>AVALIAÇÕES: 3</h3>
        <div className={styles.comment}>
          <CommentPost />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
