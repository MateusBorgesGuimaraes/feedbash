import React from "react";
import styles from "../../User.module.css";
import TableComponent from "../../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";

const DashboardReports = () => {
  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="LINK/ID:USER/NUM-FLAGS">
        <tr>
          <th>link</th>
          <th>user id</th>
          <th>flags</th>
          <th>excluir</th>
        </tr>

        <>
          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>id: 5476543574562565</td>

            <td className={styles.flags}>
              <img src={assets.warningDarkPurple} alt="" /> 6
            </td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>id: 5476543574562565</td>

            <td className={styles.flags}>
              <img src={assets.warningDarkPurple} alt="" /> 6
            </td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>id: 5476543574562565</td>

            <td className={styles.flags}>
              <img src={assets.warningDarkPurple} alt="" /> 6
            </td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>id: 5476543574562565</td>

            <td className={styles.flags}>
              <img src={assets.warningDarkPurple} alt="" /> 6
            </td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>
        </>
      </TableComponent>
    </div>
  );
};

export default DashboardReports;
