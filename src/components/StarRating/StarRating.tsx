import React from "react";
import styles from "./StarRating.module.css";
import EmptyStar from "../../assets/icons/empty-star-icon.svg?react";

type StarRatingProps = {
  onRatingChange: (rating: number) => void;
};

const StarRating = ({ onRatingChange }: StarRatingProps) => {
  const [value, setValue] = React.useState(0);

  function setColor(newValue: number) {
    if (newValue === value) {
      setValue(0);
      onRatingChange(0);
    } else {
      setValue(newValue);
      onRatingChange(newValue);
    }
  }

  return (
    <div className={styles.starRating}>
      <button
        type="button"
        className={value >= 1 ? styles.active : ""}
        onClick={() => setColor(1)}
      >
        <EmptyStar />
      </button>
      <button
        type="button"
        className={value >= 2 ? styles.active : ""}
        onClick={() => setColor(2)}
      >
        <EmptyStar />
      </button>
      <button
        type="button"
        className={value >= 3 ? styles.active : ""}
        onClick={() => setColor(3)}
      >
        <EmptyStar />
      </button>
      <button
        type="button"
        className={value >= 4 ? styles.active : ""}
        onClick={() => setColor(4)}
      >
        <EmptyStar />
      </button>
      <button
        type="button"
        className={value >= 5 ? styles.active : ""}
        onClick={() => setColor(5)}
      >
        <EmptyStar />
      </button>
    </div>
  );
};

export default StarRating;
