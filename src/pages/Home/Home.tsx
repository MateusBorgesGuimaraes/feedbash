import React from "react";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import { assets } from "../../assets/assets";
import Talk from "../../components/Talk/Talk";
import { Link } from "react-router-dom";
import CardButton from "../../components/CardButton/CardButton";
import TableComponent from "../../components/TableComponent/TableComponent";

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
          <div className={styles.talk}>
            <Talk iconPosition="right" icon={assets.thinkingEmoji}>
              Esta com duvida sobre algo que você fez mas não tem ninguem para
              pedir feedback?
            </Talk>

            <Talk iconPosition="left" icon={assets.confoundedEmoji}>
              Você é tímido e tem vergonha de pedir alguém pessoalmente?
            </Talk>

            <Talk iconPosition="right" icon={assets.relievedEmoji}>
              Você gosta de descobrir coisas novas e ajudar as pessoas?
            </Talk>

            <Talk iconPosition="left" icon={assets.supriseEmoji}>
              Gostaria de poder postar o link para o seu conteúdo de forma
              anônima, gratuita e obter feedback confiável?
            </Talk>

            <Talk iconPosition="right" icon={assets.partyingEmoji}>
              Cadastre-se ja na feedbash e participe de uma comunidade engajada
              com o autoaprimoramento e o seu sucesso no que quer você queira
              fazer !!!
            </Talk>
          </div>
        </section>
      </section>

      <section className={styles.categoriesBg}>
        <div className={`${styles.categoriesLayout} container`}>
          <div className={styles.categoriesTitle}>
            <img src={assets.twoStarDec} alt="" />
            <h2>CATEGORIAS</h2>
            <img src={assets.twoStarDec} alt="" />
          </div>
          <div className={styles.imgCategoriesContainer}>
            <CardButton img={assets.videos}>VIDEOS</CardButton>

            <CardButton img={assets.art}>DESENHOS</CardButton>

            <CardButton img={assets.photo}>FOTOS</CardButton>

            <CardButton img={assets.write}>ESCRITA</CardButton>
          </div>
        </div>
      </section>

      <section className={styles.tableBg}>
        <div className={`${styles.tableLayout} container`}>
          <div className={styles.tableTitle}>
            <h1>ULTIMAS POSTAGENS</h1>
            <img src={assets.twoStarDec} alt="" />
          </div>

          <TableComponent
            caption="recentes..."
            tableColor="var(--white-ice)"
            captionColor="var(--purple-300)"
            headerColor="var(--purple-200)"
            headerTextColor="var(--purple-900)"
            bodyTextColor="var(--purple-700)"
          >
            <tr>
              <th>link</th>
              <th>autor</th>
              <th>âmbito</th>
              <th>categoria</th>
              <th>data</th>
            </tr>

            <>
              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>

              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>

              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>

              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>

              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>

              <tr>
                <td>
                  <Link to="">
                    <img src={assets.linkPurple} alt="" /> link
                  </Link>
                </td>
                <td>mateus borges</td>
                <td>educacional</td>
                <td>desenho</td>
                <td>12/07/2023</td>
              </tr>
            </>
          </TableComponent>
        </div>
      </section>
    </section>
  );
};

export default Home;
