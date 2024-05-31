import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import styles from "./LoginForm.module.css";
import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserSchema = z.object({
  name: z
    .string()
    .min(3, "Nome do usuario é obrigatorio e deve ter mais de 3 letras"),
  password: z.string().min(3, "Senha obrigatoria"),
});

type IUser = z.infer<typeof loginUserSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(loginUserSchema),
  });

  function loginUser(data: IUser) {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <section className={`${styles.loginContainer} container`}>
      <TitleComponent>
        <img src={assets.decTitlePurple} alt="" /> <h1>LOGAR</h1>
      </TitleComponent>
      <div className={`${styles.containerForm}`}>
        <form onSubmit={handleSubmit(loginUser)}>
          <input placeholder="name" type="text" {...register("name")} />
          {errors.name && <span>{errors.name?.message}</span>}
          <input
            placeholder="password"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password?.message}</span>}

          <Button background="hsl(268, 56%, 70%)">LOGAR</Button>
          <Link to="/login/criar">Cadastre-se</Link>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
