import React from "react";
import styles from "../../User.module.css";
import TableComponent from "../../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";

const DashboardUsers = () => {
  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="Todos os usuários">
        <tr>
          <th>nome</th>
          <th>criado em</th>
          <th>comentarios</th>
          <th>excluir</th>
        </tr>

        <>
          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> Carlos Miguel
              </Link>
            </td>
            <td>12/05/2024</td>

            <td>6</td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> Carlos Miguel
              </Link>
            </td>
            <td>12/05/2024</td>

            <td>6</td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> Carlos Miguel
              </Link>
            </td>
            <td>12/05/2024</td>

            <td>6</td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> Carlos Miguel
              </Link>
            </td>
            <td>12/05/2024</td>

            <td>6</td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> Carlos Miguel
              </Link>
            </td>
            <td>12/05/2024</td>

            <td>6</td>

            <td>
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>
        </>
      </TableComponent>
    </div>
  );
};

export default DashboardUsers;
