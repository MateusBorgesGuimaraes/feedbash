import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import Home from "../../../assets/icons/home2.svg?react";
import Post from "../../../assets/icons/menuPost.svg?react";
import Logout from "../../../assets/icons/menuLogout.svg?react";
import Review from "../../../assets/icons/menuReview.svg?react";
import Save from "../../../assets/icons/menuSave.svg?react";
import Add from "../../../assets/icons/add-post.svg?react";
import Dashboard from "../../../assets/icons/dashboard-icon.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { admin, userLogout } = React.useContext(UserContext);
  return (
    <nav className={`${styles.nav} ${admin && styles.navAdmin}`}>
      <NavLink to="/conta" end>
        <Home />
      </NavLink>
      <NavLink to="/conta/add-post">
        <Add />
      </NavLink>
      <NavLink to="/conta/posts">
        <Post />
      </NavLink>
      <NavLink to="/conta/my-reviews">
        <Review />
      </NavLink>
      <NavLink to="/conta/save-reviews">
        <Save />
      </NavLink>
      {admin && (
        <NavLink to="/conta/dashboard">
          <Dashboard />
        </NavLink>
      )}

      <button onClick={userLogout}>
        <Logout />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
