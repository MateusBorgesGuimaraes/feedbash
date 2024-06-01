import React from "react";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import styles from "../Login.module.css";
import { assets } from "../../../assets/assets";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../../../components/Form/InputForm/InputForm";
import LabelForm from "../../../components/Form/LabelForm/LabelForm";
import ErrorForm from "../../../components/Form/ErrorForm/ErrorForm";
import ButtonForm from "../../../components/ButtonForm/ButtonForm";

const loginUserSchema = z.object({
  name: z
    .string()
    .min(3, "Nome do usuario é obrigatorio e deve ter mais de 3 letras"),
  email: z
    .string()
    .min(1, "O Email é obrigatorip")
    .email("O formato do email esta incorreto"),
  password: z.string().min(3, "Senha obrigatoria"),
  photoUrl: z.string().min(3, "Foto obrigatoria"),
});

type IUser = z.infer<typeof loginUserSchema>;

const LoginCreate = () => {
  const loginUserForm = useForm<IUser>({
    resolver: zodResolver(loginUserSchema),
  });

  function loginUser(data: IUser) {
    // fetch("http://localhost:5000/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((json) => console.log(json));
    console.log(data);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginUserForm;

  return (
    <section className={`${styles.loginContainer} container`}>
      <TitleComponent>
        <img src={assets.decTitlePurple} alt="" /> <h1>CADASTRAR</h1>
      </TitleComponent>
      <div className={`${styles.containerForm}`}>
        <div className={styles.imgSection}>
          <img src={assets.login} alt="" />
        </div>
        <div className={styles.formSection}>
          <FormProvider {...loginUserForm}>
            <form
              className={styles.formSectionContainer}
              onSubmit={handleSubmit(loginUser)}
            >
              <div className={styles.formFild}>
                <LabelForm htmlFor="name">NOME</LabelForm>
                <InputForm type="text" name="name" />

                <ErrorForm field="name" />
              </div>

              <div className={styles.formFild}>
                <LabelForm htmlFor="email">EMAIL</LabelForm>
                <InputForm type="email" name="email" />

                <ErrorForm field="email" />
              </div>

              <div className={styles.formFild}>
                <LabelForm htmlFor="password">PASSWORD</LabelForm>
                <InputForm type="password" name="password" />

                <ErrorForm field="password" />
              </div>

              <div className={styles.formFild}>
                <LabelForm htmlFor="photoUrl">LINK FOTO(OPCIONAL)</LabelForm>
                <InputForm type="text" name="photoUrl" />

                <ErrorForm field="photoUrl" />
              </div>

              <ButtonForm background="hsl(268, 56%, 70%)">CADASTRAR</ButtonForm>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default LoginCreate;
