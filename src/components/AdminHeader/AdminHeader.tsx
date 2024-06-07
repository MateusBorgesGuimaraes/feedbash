import React from "react";
import { NavLink } from "react-router-dom";
import Index from "../../assets/icons/index-icon.svg?react";
import Warning from "../../assets/icons/warning-icon.svg?react";
import Users from "../../assets/icons/users-icon.svg?react";
import Expand from "../../assets/icons/expand-icon.svg?react";
import styles from "./AdminHeader.module.css";

const AdminHeader = () => {
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className={styles.headerContainer}>
      <button onClick={handleClick} className={styles.expand}>
        <Expand />
      </button>
      <nav className={`${styles.navAdmin} ${open ? styles.active : ""}`}>
        <NavLink to="/conta/dashboard" end>
          <p className={`${open ? styles.active : ""}`}>Inicio</p>
          <Index />
        </NavLink>
        <NavLink to="/conta/dashboard/reports">
          <p className={`${open ? styles.active : ""}`}>Reports</p>
          <Warning />
        </NavLink>
        <NavLink to="/conta/dashboard/users">
          <p className={`${open ? styles.active : ""}`}>Usuarios</p>
          <Users />
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminHeader;
