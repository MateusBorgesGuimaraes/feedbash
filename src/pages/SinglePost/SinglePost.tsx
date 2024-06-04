import React from "react";
import styles from "./SinglePost.module.css";
import { assets } from "../../assets/assets";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import ShowStar from "../../components/ShowStar/ShowStar";

const SinglePost = () => {
  return (
    <section className="container">
      <div className={styles.postHeaderLayout}>
        <div>
          <img src={assets.userTest1} alt="" />
        </div>
        <div className={styles.postHeader}>
          <p>
            <span>Nome autor(a):</span>Lua Riad Suvan
          </p>
          <p>
            <span>Categoria:</span>Video
          </p>
          <p>
            <span>Foco da analise:</span>Som do video no ambiente
          </p>
          <p>
            <span>Ambito:</span>Educacional
          </p>

          <a href="https://www.youtube.com/watch?v=yC0JPJ2Uf6k&list=WL&index=7&t=287s">
            https://www.youtube.com/watch?v=yC0JPJ2Uf6k&list=WL&index=7&t=287s
          </a>
        </div>
      </div>

      <div className={styles.rating}>
        <TitleComponent>
          <img src={assets.decTitlePurple} alt="" /> <h1>CLASSIFICAÇÃO </h1>
        </TitleComponent>

        <div>
          <ShowStar sizeStar="2.5rem" />
          <p>4/5</p>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
