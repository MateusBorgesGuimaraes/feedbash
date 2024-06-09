import React from "react";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import { assets } from "../../assets/assets";
import Talk from "../../components/Talk/Talk";
import { Link } from "react-router-dom";
import CardButton from "../../components/CardButton/CardButton";
import TableComponent from "../../components/TableComponent/TableComponent";
import useFetch from "../../Hooks/useFetch";
import { PostInterface, formatarDatasComentarios } from "../../types";
import { GET_NEW_POSTS } from "../../Api";

const Home = () => {
  const [newPost, setNewPosts] = React.useState<PostInterface[] | null>(null);
  const { request } = useFetch();

  React.useEffect(() => {
    async function getNewPosts() {
      const { url, options } = GET_NEW_POSTS();
      const { response, json } = await request(url, options);
      if (response && response.ok) setNewPosts(json);
      else console.log("erro ao setar posts");
    }
    getNewPosts();
  }, [request]);

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
            <CardButton link="/posts/video" img={assets.videos}>
              VIDEOS
            </CardButton>

            <CardButton link="/posts/art" img={assets.art}>
              DESENHOS
            </CardButton>

            <CardButton link="/posts/photo" img={assets.photo}>
              FOTOS
            </CardButton>

            <CardButton link="/posts/writing" img={assets.write}>
              ESCRITA
            </CardButton>
          </div>
        </div>
      </section>

      <section className={styles.tableBg}>
        <div className={`${styles.tableLayout} container`}>
          <div className={styles.tableTitle}>
            <h1>ULTIMAS POSTAGENS</h1>
            <img src={assets.twoStarDec} alt="" />
          </div>

          <TableComponent caption="recentes...">
            <tr>
              <th>link</th>
              <th>autor</th>
              <th>âmbito</th>
              <th>categoria</th>
              <th>data</th>
            </tr>

            <>
              {newPost?.map((post) => (
                <tr key={post._id}>
                  <td>
                    <Link to={`/post/${post._id}`}>
                      <img src={assets.linkPurple} alt="" /> link
                    </Link>
                  </td>
                  <td>{post.author}</td>
                  <td>{post.scope}</td>
                  <td>{post.category}</td>
                  <td>{formatarDatasComentarios(post.createdAt)}</td>
                </tr>
              ))}
            </>
          </TableComponent>
        </div>
      </section>
    </section>
  );
};

export default Home;
