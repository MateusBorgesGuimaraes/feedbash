import React from "react";
import { assets } from "../../assets/assets";
import styles from "./ShowStar.module.css";

type ShowStarProps = {
  rating?: number;
  sizeStar?: string;
};

const ShowStar = ({ sizeStar = "1.5rem" }: ShowStarProps) => {
  function calcularMediaAvaliacoes(avaliacoes: number[]): number {
    const contagemAvaliacoes = [0, 0, 0, 0, 0];

    avaliacoes.forEach((estrelas) => {
      if (estrelas >= 1 && estrelas <= 5) {
        contagemAvaliacoes[estrelas - 1]++;
      }
    });

    let totalPontos = 0;
    let totalAvaliacoes = 0;
    for (let i = 0; i < contagemAvaliacoes.length; i++) {
      totalPontos += contagemAvaliacoes[i] * (i + 1);
      totalAvaliacoes += contagemAvaliacoes[i];
    }

    return totalAvaliacoes === 0 ? 0 : totalPontos / totalAvaliacoes;
  }
  const avaliacoes = [
    1, 2, 3, 4, 5, 5, 4, 3, 2, 5, 4, 4, 5, 3, 2, 1, 5, 5, 4, 3,
  ];

  const media = calcularMediaAvaliacoes(avaliacoes);

  const stars = [0, 1, 2, 3, 4].map((i) => {
    if (i < media) {
      return (
        <img
          style={{ width: sizeStar }}
          key={i}
          src={assets.fullStar}
          alt="Full Star"
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
