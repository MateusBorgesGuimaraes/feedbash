import React from "react";
import CardButton from "../CardButton/CardButton";
import { assets } from "../../assets/assets";
import styles from "./UserHeader.module.css";
import { UserContext } from "../../Context/UserContext";
import TitleComponent from "../TitleComponent/TitleComponent";
import UserHeaderNav from "./UserHeaderNav/UserHeaderNav";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  React.useEffect(() => {
    switch (location.pathname) {
      case "/conta/posts":
        setTitle("Meus Posts");
        break;
      case "/conta/my-reviews":
        setTitle("Minhas Reviews");
        break;
      case "/conta/save-reviews":
        setTitle("Reviews Salvas");
        break;
      default:
        setTitle("Minha Conta"); // ou um valor padrão adequado
        break;
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <TitleComponent>
        <img src={assets.decTitlePurple} alt="" /> <h1>{title}</h1>
      </TitleComponent>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
