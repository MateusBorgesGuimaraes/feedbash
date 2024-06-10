import React, { useState, useRef, useEffect, FocusEvent } from "react";
import styles from "./CommentPost.module.css";
import StarRating from "../StarRating/StarRating";
import useFetch from "../../Hooks/useFetch";
import { POST_COMMENT } from "../../Api";
import { UserContext } from "../../Context/UserContext";
import { CommentInterface } from "../../types";

type CommentPostProps = {
  id: string;
  addComment: (comment: CommentInterface) => void;
};

const CommentPost = ({ id, addComment }: CommentPostProps) => {
  const [active, setActive] = useState(false);
  const [rating, setRating] = useState(0);
  const { request } = useFetch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { data } = React.useContext(UserContext);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height =
        textarea.value.trim() === ""
          ? "initial"
          : `${Math.max(textarea.scrollHeight, 200)}px`;
    }
  };

  const handleFocus = () => {
    setActive(true);
    adjustTextareaHeight();
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (
      e.relatedTarget &&
      (e.relatedTarget as Element).closest(`.${styles.starRating}`)
    ) {
      return;
    }
    const textarea = textareaRef.current;
    if (textarea) {
      if (textarea.value.trim() === "") {
        textarea.style.height = "initial";
        setActive(false);
      } else {
        adjustTextareaHeight();
      }
    }
  };

  const handleStarClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  async function postComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    if (!token) return;
    const { url, options } = POST_COMMENT(token, {
      author: data?.name,
      postId: id,
      comment: textareaRef.current?.value,
      rating,
      photoUrl: data?.photoUrl,
    });

    const { response, json } = await request(url, options);
    if (response && response.ok) {
      addComment(json);
      setActive(false);
      setRating(0);
    }
  }

  return (
    <form onSubmit={postComment} className={styles.commentForm}>
      <textarea
        ref={textareaRef}
        placeholder="Escreva uma avaliação"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={adjustTextareaHeight}
      ></textarea>
      {(active ||
        (textareaRef.current && textareaRef.current.value.trim() !== "")) && (
        <div onMouseDown={handleStarClick} className={styles.starRating}>
          <StarRating onRatingChange={setRating} />
        </div>
      )}
      {(active ||
        (textareaRef.current && textareaRef.current.value.trim() !== "")) && (
        <button>POSTAR</button>
      )}
    </form>
  );
};

export default CommentPost;
