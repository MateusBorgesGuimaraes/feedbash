import React from "react";
import styles from "./Comment.module.css";
import { assets } from "../../assets/assets";
import ShowStar from "../ShowStar/ShowStar";
import { useParams } from "react-router-dom";
import { CommentInterface, SavedCommentInterface } from "../../types";
import useFetch from "../../Hooks/useFetch";
import {
  REPORT_COMMENT,
  SAVE_COMMENT_POST,
  UNSAVE_COMMENT_POST,
} from "../../Api";
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
  reports,
  commentId,
}: CommentProps) {
  const [save, setSave] = React.useState(false);
  const [report, setReport] = React.useState(false);
  const { login, data } = React.useContext(UserContext);
  const { request } = useFetch();
  const { id } = useParams();
  const param = useParams();
  const commentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (data?.savedComments && commentId) {
      const isSaved = data.savedComments.some(
        (savedComment: SavedCommentInterface) =>
          savedComment.commentId === commentId
      );
      setSave(isSaved);
    }

    if (!reports || !data?._id) return;
    if (reports.includes(data._id)) {
      setReport(true);
    }

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const urlCommentId = url.hash.substring(1);

    if (commentId === urlCommentId && commentRef.current) {
      commentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [data, commentId, reports]);

  async function toggleSaveComment() {
    const token = window.localStorage.getItem("token");
    if (!token || !commentId) return;

    if (save) {
      const { url, options } = UNSAVE_COMMENT_POST<SavedCommentInterface>(
        token,
        {
          postId: postId,
          commentId: commentId,
        }
      );
      const { response } = await request(url, options);
      if (response && response.ok) {
        console.log("comentario removido com sucesso");
        setSave(false);
      } else {
        console.log("erro ao remover comentario");
      }
    } else {
      const { url, options } = SAVE_COMMENT_POST<SavedCommentInterface>(token, {
        postId: postId,
        commentId: commentId,
      });
      const { response } = await request(url, options);
      if (response && response.ok) {
        console.log("comentario salvo");
        setSave(true);
      } else {
        console.log("erro ao salvar comentario");
      }
    }
  }

  async function reportComment() {
    const confirm = window.confirm(
      "Tem certeza que deseja reportar esse comentario? A ação não podera ser desfeita"
    );
    const token = window.localStorage.getItem("token");
    if (!confirm || !token || !commentId) return;
    const { url, options } = REPORT_COMMENT(commentId, token);

    const { response, json } = await request(url, options);
    if (response && response.ok) {
      setReport(true);
      window.alert("Comentario reportado");
    } else {
      window.alert("Erro ao reportar comentario");
    }
  }

  return (
    <div ref={commentRef} id={`${commentId}`} className={styles.comment}>
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
          {data?._id === authorId && (
            <button onClick={toggleSaveComment}>
              <img src={save ? assets.unsave : assets.save} alt="" />
            </button>
          )}

          {report ? (
            <button className={styles.svgItem}>
              <img src={assets.reportRed} alt="" />
            </button>
          ) : (
            <button onClick={reportComment} className={styles.svgItem}>
              <img src={assets.report} alt="" />
            </button>
          )}
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
