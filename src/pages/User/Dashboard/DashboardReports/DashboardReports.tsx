import React from "react";
import styles from "../../User.module.css";
import TableComponent from "../../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";
import { CommentInterface, CommetsReport } from "../../../../types";
import useFetch from "../../../../Hooks/useFetch";
import { DELETE_COMMENT, GET_ALL_USERS_COMMENTS } from "../../../../Api";

const DashboardReports = () => {
  const [reports, setReports] = React.useState<CommetsReport[] | null>(null);
  const { request } = useFetch();

  React.useEffect(() => {
    async function getComment() {
      const token = window.localStorage.getItem("token");
      if (!token) return;
      const { url, options } = GET_ALL_USERS_COMMENTS(token);
      const { response, json } = await request(url, options);

      if (response && response.ok) {
        const reportes = json
          .filter(
            (comment: CommentInterface) =>
              comment.reports && comment.reports.length > 0
          )
          .map((comment: CommentInterface) => ({
            commentId: comment._id,
            postId: comment.postId,
            reportedBy: comment.reports ? comment.reports.join(", ") : "",
            reportsCount: comment.reports ? comment.reports.length : 0,
          }));

        setReports(reportes);
      } else {
        console.log("erro ao carregar comentarios");
      }
    }
    getComment();
  }, [request]);

  async function deleteComment(id: string) {
    const token = window.localStorage.getItem("token");
    const confirm = window.confirm(
      "Tem certeza que deseja deletar a review? A operação não podera ser desfeita"
    );
    if (!id || !token || !confirm) return;
    const { url, options } = DELETE_COMMENT(id, token);
    const { response } = await request(url, options);
    if (response && response.ok) {
      window.alert("Comentario Deletado");
      setReports(
        (prevReports) =>
          prevReports?.filter((report) => report.commentId !== id) || null
      );
    } else window.alert("Erro ao deletar o comentario");
  }

  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="LINK/ID:COMMENT/NUM-FLAGS/DELETE-COMMENT">
        <tr>
          <th>link</th>
          <th>comment id</th>
          <th>flags</th>
          <th>excluir comentario</th>
        </tr>

        <>
          {reports?.map((report) => (
            <tr key={report.commentId}>
              <td>
                <Link to={`/post/${report.postId}#${report.commentId}`}>
                  <img src={assets.linkPurple} alt="" /> link
                </Link>
              </td>
              <td>id: {report.commentId}</td>

              <td className={styles.flags}>
                <img src={assets.warningDarkPurple} alt="" />{" "}
                {report.reportsCount}
              </td>

              <td>
                <ButtonSmall
                  onClick={() => deleteComment(report.commentId)}
                  icon={assets.excludePurple}
                >
                  EXCLUIR
                </ButtonSmall>
              </td>
            </tr>
          ))}
        </>
      </TableComponent>
    </div>
  );
};

export default DashboardReports;
