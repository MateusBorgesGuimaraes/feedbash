import React from "react";
import styles from "../User.module.css";
import TableComponent from "../../../components/TableComponent/TableComponent";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import ShowStar from "../../../components/ShowStar/ShowStar";
import ButtonSmall from "../../../components/ButtonSmall/ButtonSmall";

const SaveReviews = () => {
  return (
    <div className={styles.tableContainer}>
      <TableComponent
        caption="criticas"
        tableColor="var(--white-ice)"
        captionColor="var(--purple-300)"
        headerColor="var(--purple-200)"
        headerTextColor="var(--purple-900)"
        bodyTextColor="var(--purple-700)"
      >
        <tr>
          <th>link</th>
          <th>categoria</th>
          <th>data</th>
          <th>avaliação</th>
          <th>excluir postagem</th>
        </tr>

        <>
          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/">
                <img src={assets.linkPurple} alt="" /> link
              </Link>
            </td>
            <td>Video</td>

            <td>12/07/2023</td>
            <td>
              <ShowStar />
            </td>
            <td>
              <ButtonSmall icon={assets.unsavePurple}>DESMARACAR</ButtonSmall>
            </td>
          </tr>
        </>
      </TableComponent>
    </div>
  );
};

export default SaveReviews;
