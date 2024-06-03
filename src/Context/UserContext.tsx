import React from "react";
import { LoginInterface, UserInterface } from "../types";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../Api";
import { useNavigate } from "react-router-dom";

type StorageInterface = {
  userLogin(data: LoginInterface): Promise<void>;
  data: UserInterface | null;
  userLogout(): Promise<void>;
  login: boolean;
  loading: boolean;
  error: string | null;
};

export const UserContext = React.createContext<StorageInterface>(
  {} as StorageInterface
);

export const UserStorage = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = React.useState<UserInterface | null>(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");

      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(data: LoginInterface) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST(data);
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { accessToken } = await tokenRes.json();
      window.localStorage.setItem("token", accessToken);
      await getUser(accessToken);
      navigate("/conta");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
