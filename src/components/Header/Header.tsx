import React from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [menuMobile, setmenuMobile] = React.useState(false);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const location = useLocation();

  const { data } = React.useContext(UserContext);

  const handleToggleSubmenu = () => {
    if (active) {
      setActive(false);
      setTimeout(() => setShowSubmenu(false), 300);
    } else {
      setShowSubmenu(true);
      setTimeout(() => setActive(true), 10);
    }
  };

  React.useEffect(() => {
    function resetaEstado() {
      setActive(false);
      setmenuMobile(false);
      setShowSubmenu(false);
    }
    resetaEstado();
  }, [location]);

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
                <Link to="/posts-page">
                  <img src={assets.all} alt="" />
                  ALL
                </Link>
              </li>
              <li>
                <Link to="/posts/photo">
                  <img src={assets.photoSubmenu} alt="" />
                  FOTOS
                </Link>
              </li>
              <li>
                <Link to="/posts/video">
                  <img src={assets.videoSubmenu} alt="" />
                  VIDEOS
                </Link>
              </li>
              <li>
                <Link to="/posts/writing">
                  <img src={assets.writeSubmenu} alt="" />
                  ESCRITA
                </Link>
              </li>
              <li>
                <Link to="/posts/art">
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
            {data ? (
              <Link to="/conta" className={styles.headerUser}>
                <img src={data.photoUrl} alt="" /> {data.name}
              </Link>
            ) : (
              <Link className={styles.headerLogin} to="/login">
                LOGIN <img src={assets.user} alt="" />{" "}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
