import React, { useState, useRef, useEffect, FocusEvent } from "react";
import styles from "./CommentPost.module.css";
import StarRating from "../StarRating/StarRating";

const CommentPost = () => {
  const [active, setActive] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <form className={styles.commentForm}>
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
          <StarRating />
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
