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
      case "/conta/add-post":
        setTitle("Adicionar Post");
        break;
      case "/conta/posts":
        setTitle("Meus Posts");
        break;
      case "/conta/my-reviews":
        setTitle("Minhas Reviews");
        break;
      case "/conta/save-reviews":
        setTitle("Reviews Salvas");
        break;
      case "/conta/dashboard":
        setTitle("Dashboard Inicio");
        break;
      case "/conta/dashboard/reports":
        setTitle("Reports");
        break;
      case "/conta/dashboard/users":
        setTitle("Usuários");
        break;
      default:
        setTitle("Minha Conta");
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
