import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
      </Routes>
    </div>
  );
};

export default Login;
