import React from "react";
import { LoginInterface, UserInterface } from "../types";
import { TOKEN_POST, USER_GET } from "../Api";

type StorageInterface = {
  userLogin(data: LoginInterface): Promise<void>;
  data: UserInterface | null;
};

export const UserContext = React.createContext<StorageInterface>(
  {} as StorageInterface
);

export const UserStorage = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = React.useState<UserInterface | null>(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(data: LoginInterface) {
    const { url, options } = TOKEN_POST(data);
    const tokenRes = await fetch(url, options);
    const { accessToken } = await tokenRes.json();
    window.localStorage.setItem("token", accessToken);
    getUser(accessToken);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
