import React from "react";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <section className={`${styles.heroBg}`}>
      <main className={`${styles.heroLayout} container`}>
        <p>
          Quer feedbacks para algum projeto seu? seja do tema vídeos, escrita,
          desenhos e muito mais? Registre-se agora de forma gratuita e interaja
          com milhares de pessoas. Avalie e seja avaliado .
        </p>
        <h1>
          Feedback de qualidade das mais variadas pessoas sobre os mais diversos
          assuntos
        </h1>
        <div className={styles.containerBtns}>
          <Button background="hsl(218, 82%, 24%)">CADASTRAR</Button>{" "}
          <Button background="hsl(268, 46%, 39%)">NOVIDADES</Button>
        </div>
        <div className={styles.containerImgHero}>
          <img src={assets.hero} alt="" />
        </div>
      </main>

      <section className={`${styles.introductionBg}`}>
        <section className={`${styles.introductionLayout} container`}>
          <p>ola</p>
          <img src={assets.login} alt="" />
        </section>
      </section>
    </section>
  );
};

export default Home;
