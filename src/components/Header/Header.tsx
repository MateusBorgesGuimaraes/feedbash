import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [menuMobile, setmenuMobile] = React.useState(false);
  const [showSubmenu, setShowSubmenu] = React.useState(false);

  const handleToggleSubmenu = () => {
    if (active) {
      setActive(false);
      setTimeout(() => setShowSubmenu(false), 300);
    } else {
      setShowSubmenu(true);
      setTimeout(() => setActive(true), 10);
    }
  };

  return (
    <header className={styles.headerBg}>
      <nav className={`${styles.headerLayout} container`}>
        <Link to="/">
          <img src={assets.darkLogo} alt="" />
        </Link>
        <button
          onClick={() => setmenuMobile(!menuMobile)}
          className={`${styles.menuMobile} ${
            menuMobile ? styles.mobileActive : ""
          }`}
        >
          <img src={assets.hamburgerMenu} alt="" />
        </button>
        <ul
          className={`${styles.headerUl} ${
            menuMobile ? styles.mobileActive : ""
          }`}
        >
          <li className={styles.submenuAnchor}>
            <button
              onClick={handleToggleSubmenu}
              className={styles.buttonSubmenu}
            >
              CATEGORIAS{" "}
              <img
                className={`${styles.arrow} ${active ? styles.active : ""}`}
                src={assets.arrowDownSubMenu}
                alt=""
              />{" "}
            </button>
            <ul
              className={`${styles.headerSubmenu} ${
                showSubmenu ? styles.show : ""
              } ${active ? styles.active : ""}`}
            >
              <li>
                <Link to="/">
                  <img src={assets.all} alt="" />
                  ALL
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={assets.photoSubmenu} alt="" />
                  FOTOS
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={assets.videoSubmenu} alt="" />
                  VIDEOS
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={assets.writeSubmenu} alt="" />
                  ESCRITA
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={assets.drawSubmenu} alt="" />
                  DESENHOS
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="sobre">SOBRE </Link>
          </li>
          <li>
            <Link className={styles.headerLogin} to="/login">
              LOGIN <img src={assets.user} alt="" />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
