import React from "react";
import styles from "./SinglePost.module.css";
import { assets } from "../../assets/assets";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import ShowStar from "../../components/ShowStar/ShowStar";
import Comment from "../../components/Comment/Comment";
import CommentPost from "../../components/CommentPost/CommentPost";
import { useParams } from "react-router-dom";
import {
  CommentInterface,
  PostInterface,
  formatarDatasComentarios,
} from "../../types";
import useFetch from "../../Hooks/useFetch";
import { GET_COMMENTS_POST, GET_POST } from "../../Api";
import { UserContext } from "../../Context/UserContext";

const SinglePost = () => {
  const [post, setPost] = React.useState<PostInterface | null>(null);
  const [comments, setComments] = React.useState<CommentInterface[] | null>(
    null
  );
  const { data } = React.useContext(UserContext);
  const [averageRating, setAverageRating] = React.useState<number | null>(null);
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
    async function getComment() {
      if (!id) return;
      const { url, options } = GET_COMMENTS_POST(id);
      const { response, json } = await request(url, options);

      if (response && response.ok) {
        setComments(json);
      } else {
        console.error(json);
      }
    }
    getComment();
  }, [id, request]);

  const avaliacoes = comments?.map((comment) => comment.rating).filter(Number);

  const exiteEm = comments?.some((comment) => comment.authorId === data?._id);

  const userPost = data?._id === post?.authorId;

  React.useEffect(() => {
    if (avaliacoes && avaliacoes.length > 0) {
      const totalPontos = avaliacoes.reduce(
        (total, avaliacao) => total + avaliacao,
        0
      );
      setAverageRating(totalPontos / avaliacoes.length);
    } else {
      setAverageRating(null);
    }
  }, [avaliacoes]);

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

  const addComment = (newComment: CommentInterface) => {
    setComments((prevComments) =>
      prevComments ? [...prevComments, newComment] : [newComment]
    );
  };

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
          {averageRating !== null && (
            <ShowStar rating={averageRating} sizeStar="2.5rem" />
          )}
          <p>
            {averageRating !== null && (
              <span>{averageRating.toFixed(1)}/5</span>
            )}
          </p>
        </div>
      </div>

      <div className={styles.commentsSection}>
        <h3>AVALIAÇÕES: {comments?.length}</h3>
        <div className={styles.comment}>
          {id && !exiteEm && !userPost && (
            <CommentPost id={id} addComment={addComment} />
          )}
          {comments
            ?.slice()
            .reverse()
            .map((comment) => (
              <Comment
                key={comment._id}
                authorId={post?.authorId || ""}
                commentId={comment._id}
                photoUrl={comment.photoUrl}
                author={comment.author}
                rating={comment.rating ? comment.rating : 0}
                userId={comment._id ? comment._id : ""}
                postId={id ? id : ""}
                comment={comment.comment}
                reports={comment.reports}
                createdAt={
                  comment.createdAt
                    ? formatarDatasComentarios(comment.createdAt)
                    : ""
                }
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
