import React from "react";
import styles from "../User.module.css";
import TableComponent from "../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import ShowStar from "../../../components/ShowStar/ShowStar";
import ButtonSmall from "../../../components/ButtonSmall/ButtonSmall";
import { CommentInterface, formatarDatasComentarios } from "../../../types";
import { UserContext } from "../../../Context/UserContext";
import useFetch from "../../../Hooks/useFetch";
import { GET_ALL_USER_COMMENTS } from "../../../Api";

const MyReviews = () => {
  const [comments, setComments] = React.useState<CommentInterface[] | null>(
    null
  );
  const { request } = useFetch();
  const { data } = React.useContext(UserContext);

  React.useEffect(() => {
    async function getUserComments() {
      if (!data?._id) return;
      const { url, options } = GET_ALL_USER_COMMENTS(data?._id);

      const { response, json } = await request(url, options);
      if (response && response.ok) setComments(json);
      else "Erro ao buscar comentarios";
    }
    getUserComments();
  }, [data, request]);

  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="criticas">
        <tr>
          <th>link</th>

          <th>data</th>
          <th>rating</th>
          <th>excluir postagem</th>
        </tr>

        <>
          {comments?.map((comment) => (
            <tr>
              <td>
                <Link to={`/post/${comment.postId}#${comment._id}`}>
                  <img src={assets.linkPurple} alt="" /> link
                </Link>
              </td>

              <td>{formatarDatasComentarios(comment.createdAt)}</td>
              <td>
                <ShowStar rating={comment.rating} />
              </td>
              <td>
                <ButtonSmall icon={assets.excludePurple}>EXCLUIR</ButtonSmall>
              </td>
            </tr>
          ))}
        </>
      </TableComponent>
    </div>
  );
};

export default MyReviews;
