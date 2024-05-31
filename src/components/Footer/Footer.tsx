import React from "react";
import { assets } from "../../assets/assets";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={`container ${styles.footerLayout}`}>
        <div className={styles.logoFooter}>
          <img src={assets.ligthLogo} alt="" />
        </div>

        <div className={styles.centerFooter}>
          <div>
            <h4>Endereço</h4>
            <p>Comercial</p>
            <p>Numero 453</p>
            <p>Rua Jose Martin dos Anjos</p>
            <p>Bairro Nova Esperança</p>
            <p>Cidade São Paulo / Capital</p>
          </div>

          <div>
            <h4>Contato</h4>
            <p>Telefone: (38) 99999-9999</p>
            <p>Email: feedbash@gmail.com</p>
            <p>Instagram: oficialFeedbash@intagram</p>
            <p>Twitter: @feedtwiterbash</p>
          </div>

          <div>
            <h4>Sobre nós</h4>
            <p>motivações</p>
            <p>inpiração</p>
            <p>parceiros</p>
            <p>suporte</p>
          </div>
        </div>
        <p className={styles.copyFooter}>
          feedbash©todos.os.direitos.reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
