import React from "react";
import ShowStar from "../ShowStar/ShowStar";
import Button from "../Button/Button";
import ButtonLinkSmall from "../ButtonLinkSmall/ButtonLinkSmall";
import { assets } from "../../assets/assets";
import styles from "./PostCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.postCard}>
      <p>
        <span>autor(a): </span>
        Lua Carine Osner
      </p>
      <p>
        <span>post: </span>
        Video aula
      </p>
      <p>
        <span>categoria: </span>
        Video
      </p>
      <p>
        <span>foco: </span>
        Som
      </p>
      <p>
        <span>ambito: </span>
        Educacional
      </p>
      <div className={styles.rating}>
        <ShowStar />
      </div>
      <ButtonLinkSmall link="/" icon={assets.rating}>
        AVALIAR
      </ButtonLinkSmall>
    </div>
  );
};

export default PostCard;
