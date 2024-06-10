import React from "react";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";
import { assets } from "../../../../assets/assets";
import styles from "./DashboardHome.module.css";
import { UserContext } from "../../../../Context/UserContext";
import { formatarDatasComentarios } from "../../../../types";

const DashboardHome = () => {
  const { userLogout, data } = React.useContext(UserContext);
  if (!data) return;
  return (
    <div className={styles.dashHome}>
      <div className={styles.dashHomeImage}>
        <img src={data.photoUrl} alt="" />
      </div>
      <div className={styles.dashHomeInfo}>
        <div className={styles.dashHomeInfoText}>
          <p>
            <span>STATUS:</span> Admin
          </p>
          <p>
            <span>NOME:</span> {data?.name}
          </p>
          <p>
            <span>CRIADO EM:</span> {formatarDatasComentarios(data.createdAt)}
          </p>
          <p>
            <span>EMAIL:</span> {data.email}
          </p>
        </div>

        <ButtonSmall
          onClick={userLogout}
          background="hsl(218, 82%, 24%)"
          icon={assets.logoutIcon}
        >
          LOGOUT
        </ButtonSmall>
      </div>
    </div>
  );
};

export default DashboardHome;
