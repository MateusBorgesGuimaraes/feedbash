import React from "react";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";
import { assets } from "../../../../assets/assets";
import styles from "./DashboardHome.module.css";
import { UserContext } from "../../../../Context/UserContext";

const DashboardHome = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <div className={styles.dashHome}>
      <div className={styles.dashHomeImage}>
        <img src={assets.userTest1} alt="" />
      </div>
      <div className={styles.dashHomeInfo}>
        <div className={styles.dashHomeInfoText}>
          <p>
            <span>STATUS:</span> Admin
          </p>
          <p>
            <span>NOME:</span>Marta Pereira
          </p>
          <p>
            <span>TELEFONE:</span> (38) 99999-9999
          </p>
          <p>
            <span>EMAIL:</span> marta@gmail.com
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
