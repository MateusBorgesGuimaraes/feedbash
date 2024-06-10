import React from "react";
import styles from "../../User.module.css";
import TableComponent from "../../../../components/TableComponent/TableComponent";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import ButtonSmall from "../../../../components/ButtonSmall/ButtonSmall";
import useFetch from "../../../../Hooks/useFetch";
import { UserInterface, formatarDatasComentarios } from "../../../../types";
import { DELETE_USER, GET_ALL_USERS } from "../../../../Api";

const DashboardUsers = () => {
  const [users, setUsers] = React.useState<UserInterface[] | null>(null);
  const { request } = useFetch();

  React.useEffect(() => {
    async function getUsers() {
      const token = window.localStorage.getItem("token");
      if (!token) return;
      const { url, options } = GET_ALL_USERS(token);
      const { response, json } = await request(url, options);
      if (response && response.ok) setUsers(json);
      else console.log("erro carregar usuarios");
    }
    getUsers();
  }, [request]);

  async function deleteUsers(id: string) {
    const token = window.localStorage.getItem("token");
    const confirm = window.confirm(
      "Tem certeza que deseja deletar o usuario? A operação não podera ser desfeita"
    );
    if (!id || !token || !confirm) return;
    const { url, options } = DELETE_USER(id, token);
    const { response } = await request(url, options);
    if (response && response.ok) {
      window.alert("Usuario Deletado");
      setUsers(
        (prevUsers) => prevUsers?.filter((user) => user._id !== id) || null
      );
    } else window.alert("Erro ao deletar o User");
  }

  if (!users) return;
  return (
    <div className={styles.tableContainer}>
      <TableComponent caption="Todos os usuários">
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>contato</th>
          <th>criado em</th>
          <th>excluir</th>
        </tr>

        <>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{formatarDatasComentarios(user.createdAt)}</td>
                <td>
                  <ButtonSmall
                    onClick={() => deleteUsers(user._id || "")}
                    icon={assets.excludePurple}
                  >
                    EXCLUIR
                  </ButtonSmall>
                </td>
              </tr>
            );
          })}
        </>
      </TableComponent>
    </div>
  );
};

export default DashboardUsers;
