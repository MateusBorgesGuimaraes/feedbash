import React from "react";
import styles from "./CommentPost.module.css";
import StarRating from "../StarRating/StarRating";

const CommentPost = () => {
  const [active, setActive] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      if (textarea.value.trim() === "") {
        textarea.style.height = "initial";
      } else {
        textarea.style.height = `${Math.max(textarea.scrollHeight, 200)}px`;
      }
    }
  };

  const handleFocus = () => {
    setActive(true);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${Math.max(textarea.scrollHeight, 200)}px`;
    }
  };

  const handleBlur = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      if (textarea.value.trim() === "") {
        textarea.style.height = "initial";
      } else {
        adjustTextareaHeight();
      }
    }
    setActive(false);
  };

  React.useEffect(() => {
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
        name=""
        id=""
      ></textarea>
      <StarRating />
      {active && <button>POSTAR</button>}
    </form>
  );
};

export default CommentPost;
