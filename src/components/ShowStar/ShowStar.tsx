import React from "react";
import { assets } from "../../assets/assets";
import styles from "./ShowStar.module.css";

type ShowStarProps = {
  rating: number | number[];
  sizeStar?: string;
};

const ShowStar = ({ sizeStar = "1.5rem", rating }: ShowStarProps) => {
  function calcularMediaAvaliacoes(avaliacoes: number[]): number {
    const totalPontos = avaliacoes.reduce(
      (total, avaliacao) => total + avaliacao,
      0
    );
    return avaliacoes.length === 0 ? 0 : totalPontos / avaliacoes.length;
  }

  let media: number;

  if (Array.isArray(rating)) {
    media = calcularMediaAvaliacoes(rating);
  } else {
    media = rating;
  }

  const fullStars = Math.floor(media);
  const halfStar = media - fullStars >= 0.5;

  const stars = [0, 1, 2, 3, 4].map((i) => {
    if (i < fullStars) {
      return (
        <img
          style={{ width: sizeStar }}
          key={i}
          src={assets.fullStar}
          alt="Full Star"
        />
      );
    } else if (i === fullStars && halfStar) {
      return (
        <img
          style={{ width: sizeStar }}
          key={i}
          src={assets.halfStar}
          alt="Half Star"
        />
      );
    } else {
      return (
        <img
          style={{ width: sizeStar }}
          key={i}
          src={assets.emptyStar}
          alt="Empty Star"
        />
      );
    }
  });

  return <div className={styles.stars}>{stars}</div>;
};

export default ShowStar;
