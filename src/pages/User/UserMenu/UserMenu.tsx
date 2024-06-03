import React from "react";
import styles from "./UserMenu.module.css";
import Talk from "../../../components/Talk/Talk";
import { assets } from "../../../assets/assets";

const UserMenu = () => {
  return (
    <section className={styles.userMenu}>
      <div>
        <Talk iconPosition="right" icon={assets.smilingEmoji}>
          O Feedbash não hospeda nenhum dos conteúdo avaliados diretamente,
          utilizamos os links redirecionando para o local de acesso do item,
          abaixo alguns sites que recomendamos para a postagem de cada tipo de
          post:
        </Talk>

        <ul>
          <li>
            <h4>YOUTUBE</h4>
            <p>
              A plataforma de compartilhamento de vídeos mais famosa do mundo,
              com certeza voce ja conhece ela
            </p>
          </li>
          <li>
            <h4>INSTAGRAM</h4>
            <p>
              A plataforma de compartilhamento de fotos mais famosa do mundo,
              com certeza você ja conhece ela também
            </p>
          </li>
          <li>
            <h4>PINTEREST</h4>
            <p>
              Quer compartilhar seus desenhos com todo mundo? Pinterest é o
              lugar certo, junte e compartilhe seus desenhos ja.
            </p>
          </li>
          <li>
            <h4>GOOGLE DOCS</h4>
            <p>
              Um ótimo lugar para liberar seu escritor interior e criar
              historias, poemas, musicas emocionantes.
            </p>
          </li>
        </ul>
      </div>
      <p className={styles.obs}>
        <span>OBS:</span> nos da feedbash não somos patrocinados por nenhuma das
        plataformas citadas, a recomendação das mesmas foi feita de maneira
        totalmente imparcial, avaliando objetivamente os pros e contras de cada
        uma.
      </p>
    </section>
  );
};

export default UserMenu;
