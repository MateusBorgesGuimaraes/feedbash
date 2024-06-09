import React from "react";
import styles from "./Comment.module.css";
import { assets } from "../../assets/assets";
import ShowStar from "../ShowStar/ShowStar";
import { useParams } from "react-router-dom";
import { CommentInterface, SavedCommentInterface } from "../../types";
import useFetch from "../../Hooks/useFetch";
import { SAVE_COMMENT_POST, UNSAVE_COMMENT_POST } from "../../Api";
import { UserContext } from "../../Context/UserContext";

type CommentProps = {
  userId: string;
  author: string;
  comment: string;
  postId: string;
  authorId: string;
  commentId?: string;
  reports?: string[];
  photoUrl?: string;
  rating: number;

  createdAt?: string;
  updatedAt?: Date;
};

function Comment({
  author,
  comment,
  userId,
  rating,
  createdAt,
  photoUrl,
  postId,
  authorId,
  commentId,
}: CommentProps) {
  const [save, setSave] = React.useState(false);
  const { login, data } = React.useContext(UserContext);
  const { request } = useFetch();
  const { id } = useParams();

  // FAZER AMANHA: DEIXAR O ESTADO DO BOTAO EM REMOVER SALVAMENTO SE ELE JA ESTIVER SALVO

  async function saveComment() {
    const token = window.localStorage.getItem("token");
    if (!token || !commentId) return;
    const { url, options } = SAVE_COMMENT_POST<SavedCommentInterface>(token, {
      postId: postId,
      commentId: commentId,
    });
    const { response, json } = await request(url, options);
    if (response && response.ok) {
      console.log("comentario salvo");

      setSave(!save);
    } else {
      console.log("erro ao salvar comentario");
    }
  }

  async function unsaveComment() {
    const token = window.localStorage.getItem("token");
    if (!token || !commentId) return;
    const { url, options } = UNSAVE_COMMENT_POST<SavedCommentInterface>(token, {
      postId: postId,
      commentId: commentId,
    });
    const { response, json } = await request(url, options);
    if (response && response.ok) {
      console.log("comentario removido com sucesso");

      setSave(!save);
    } else {
      console.log("erro ao remover comentario");
    }
  }

  console.log("data", data?.savedComments);
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <div className={styles.commentFirtPart}>
          <div className={styles.commentImg}>
            <img src={photoUrl} alt="" />
          </div>
          <div className={styles.commentNome}>
            <p>{author}</p>
            <p>{createdAt}</p>
          </div>

          <div className={styles.commentRating}>
            <ShowStar rating={rating} sizeStar="1.25rem" />
          </div>
        </div>

        <div className={styles.icons}>
          {data?._id !== authorId &&
            (save ? (
              <button onClick={unsaveComment}>
                <img src={assets.unsave} alt="" />
              </button>
            ) : (
              <button onClick={saveComment}>
                <img src={assets.save} alt="" />
              </button>
            ))}

          <button>
            <img src={assets.report} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.commentContent}>
        <p>{comment}</p>
      </div>

      {userId === id && (
        <div className={styles.commentFooter}>
          <button>
            <img src={assets.excludePurple} alt="" />
            DELETE
          </button>
        </div>
      )}
    </div>
  );
}

export default Comment;
