import React from "react";
import styles from "../User.module.css";
import TableComponent from "../../../components/TableComponent/TableComponent";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import ShowStar from "../../../components/ShowStar/ShowStar";
import ButtonSmall from "../../../components/ButtonSmall/ButtonSmall";
import {
  CommentSavedTableInterface,
  SavedCommentInterface,
  formatarDatasComentarios,
} from "../../../types";
import useFetch from "../../../Hooks/useFetch";
import { UserContext } from "../../../Context/UserContext";
import { GET_COMMENT_BY_ID, UNSAVE_COMMENT_POST } from "../../../Api";

const SaveReviews = () => {
  const [saveReviews, setSaveReviews] = React.useState<
    CommentSavedTableInterface[] | null
  >(null);
  const { request } = useFetch();
  const { data } = React.useContext(UserContext);

  React.useEffect(() => {
    const fetchComments = async () => {
      const comments = data?.savedComments || [];

      const fetchCommentsProsises = comments.map(
        async (comment: SavedCommentInterface) => {
          const { commentId, postId } = comment;
          const { url, options } = GET_COMMENT_BY_ID(commentId);
          const { response, json } = await request(url, options);

          const commentInfos: CommentSavedTableInterface = {
            commentId,
            postId,
            rating: json.rating,
            author: json.author,
            createdAt: json.createdAt,
          };

          return commentInfos;
        }
      );
      const commentInfos = await Promise.all(fetchCommentsProsises);
      setSaveReviews(commentInfos);
    };

    fetchComments();
  }, [data, request]);

  async function desmarcarComentario(postId: string, commentId: string) {
    const token = window.localStorage.getItem("token");
    const ok = window.confirm("Tem certeza que deseja desmarcar o comentario?");
    if (!token || !ok) return;
    const { url, options } = UNSAVE_COMMENT_POST<SavedCommentInterface>(token, {
      postId: postId,
      commentId: commentId,
    });
    const { response } = await request(url, options);
    if (response && response.ok) {
      setSaveReviews(
        (prevReviews) =>
          prevReviews?.filter((reviews) => reviews.commentId !== commentId) ||
          null
      );
    } else {
      window.alert("erro ao desmarcar comentario");
    }
  }

  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="criticas">
        <tr>
          <th>link</th>
          <th>autor</th>
          <th>data</th>
          <th>avaliação</th>
          <th>desmarcar</th>
        </tr>

        <>
          {saveReviews?.map((saveReview) => (
            <tr key={saveReview.commentId}>
              <td>
                <Link to={`/post/${saveReview.postId}#${saveReview.commentId}`}>
                  <img src={assets.linkPurple} alt="" /> link
                </Link>
              </td>
              <td>{saveReview.author}</td>

              <td>{formatarDatasComentarios(saveReview.createdAt)}</td>
              <td>
                <ShowStar rating={saveReview.rating} />
              </td>
              <td>
                <ButtonSmall
                  onClick={() =>
                    desmarcarComentario(saveReview.postId, saveReview.commentId)
                  }
                  icon={assets.unsavePurple}
                >
                  DESMARACAR
                </ButtonSmall>
              </td>
            </tr>
          ))}
        </>
      </TableComponent>
    </div>
  );
};

export default SaveReviews;
