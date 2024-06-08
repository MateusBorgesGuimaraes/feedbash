import React from "react";
import ShowStar from "../ShowStar/ShowStar";
import Button from "../Button/Button";
import ButtonLinkSmall from "../ButtonLinkSmall/ButtonLinkSmall";
import { assets } from "../../assets/assets";
import styles from "./PostCard.module.css";

type PostCardProps = {
  id?: string;
  name?: string;
  author?: string;
  category?: string;
  focus?: string;
  scope?: string;
  rating?: number;
};

const PostCard = ({
  category,
  focus,
  scope,
  id,
  author,
  name,
}: PostCardProps) => {
  return (
    <div className={styles.postCard}>
      <p>
        <span>autor(a): </span>
        {author}
      </p>
      <p>
        <span>post: </span>
        {name}
      </p>
      <p>
        <span>categoria: </span>
        {category}
      </p>
      <p>
        <span>foco: </span>
        {focus}
      </p>
      <p>
        <span>ambito: </span>
        {scope}
      </p>
      <div className={styles.rating}>
        <ShowStar />
      </div>
      <ButtonLinkSmall link={`/post/${id}`} icon={assets.rating}>
        AVALIAR
      </ButtonLinkSmall>
    </div>
  );
};

export default PostCard;
