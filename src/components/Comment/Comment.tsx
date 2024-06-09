import React from "react";
import styles from "./Comment.module.css";
import { assets } from "../../assets/assets";
import ShowStar from "../ShowStar/ShowStar";
import { useParams } from "react-router-dom";
import { CommentInterface } from "../../types";

type CommentProps = {
  userId: string;
  author: string;
  comment: string;
  postId: string;
  authorId?: string;
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
}: CommentProps) {
  const [save, setSave] = React.useState(false);
  const { id } = useParams();

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
          {save ? (
            <button onClick={() => setSave(!save)}>
              <img src={assets.unsave} alt="" />
            </button>
          ) : (
            <button onClick={() => setSave(!save)}>
              <img src={assets.save} alt="" />
            </button>
          )}

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
