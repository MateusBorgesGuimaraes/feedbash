import React from "react";
import TableComponent from "../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import ShowStar from "../../../components/ShowStar/ShowStar";
import ButtonSmall from "../../../components/ButtonSmall/ButtonSmall";
import styles from "../User.module.css";
import { PostInterface, formatarDatasComentarios } from "../../../types";
import { DELETE_POST, GET_POST_BY_USER } from "../../../Api";
import { UserContext } from "../../../Context/UserContext";
import useFetch from "../../../Hooks/useFetch";

const Posts = () => {
  const [myPosts, setMyPosts] = React.useState<PostInterface[] | null>(null);
  const { data } = React.useContext(UserContext);
  const { request } = useFetch();

  React.useEffect(() => {
    async function getMyPots() {
      if (!data?._id) return;
      const { url, options } = GET_POST_BY_USER(data?._id);
      const { response, json } = await request(url, options);
      if (response && response.ok) setMyPosts(json);
      else "Erro ao carregar os posts";
    }
    getMyPots();
  }, [data, request]);

  async function deletePost(id: string) {
    const token = window.localStorage.getItem("token");
    const confirm = window.confirm(
      "Tem certeza que deseja deletar o post? A operação não podera ser desfeita"
    );
    if (!id || !token || !confirm) return;
    const { url, options } = DELETE_POST(id, token);
    const { response } = await request(url, options);
    if (response && response.ok) {
      window.alert("Post Deletado");
      setMyPosts(
        (prevPosts) => prevPosts?.filter((post) => post._id !== id) || null
      );
    } else window.alert("Erro ao deletar o ");
  }

  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="historico">
        <tr>
          <th>link</th>
          <th>âmbito</th>
          <th>categoria</th>
          <th>data</th>

          <th>excluir postagem</th>
        </tr>

        <>
          {myPosts?.map((post) => (
            <tr key={post._id}>
              <td>
                <Link to={`/post/${post._id}`}>
                  <img src={assets.linkPurple} alt="" /> link
                </Link>
              </td>
              <td>{post.scope}</td>
              <td>{post.category}</td>
              <td>{formatarDatasComentarios(post.createdAt)}</td>

              <td>
                <ButtonSmall
                  onClick={() => deletePost(post._id)}
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

export default Posts;
