import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [active, setActive] = React.useState(false);
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
        <ul>
          <li className={styles.submenuAnchor}>
            <button
              onClick={handleToggleSubmenu}
              className={styles.buttonSubmenu}
            >
              CATEGORIAS <img src={assets.arrowDownSubMenu} alt="" />{" "}
            </button>
            <ul
              className={`${styles.headerSubmenu} ${
                showSubmenu ? styles.show : ""
              } ${active ? styles.active : ""}`}
            >
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
            <Link to="categoria">
              LOGIN <img src={assets.user} alt="" />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
