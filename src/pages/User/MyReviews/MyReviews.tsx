import React from "react";
import styles from "../User.module.css";
import TableComponent from "../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import ShowStar from "../../../components/ShowStar/ShowStar";
import ButtonSmall from "../../../components/ButtonSmall/ButtonSmall";

const MyReviews = () => {
  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="criticas">
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
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
              <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
            </td>
          </tr>
        </>
      </TableComponent>
    </div>
  );
};

export default MyReviews;
