import React from "react";
import { Link } from "react-router-dom";
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
import { UserContext } from "../../../Context/UserContext";
import ErrorGeneral from "../../../components/ErrorGeneral/ErrorGeneral";

const loginUserSchema = z.object({
  name: z
    .string()
    .min(3, "Nome do usuario é obrigatorio e deve ter mais de 3 letras"),
  password: z.string().min(3, "Senha obrigatoria e deve ter mais de 3 letras"),
});

type IUser = z.infer<typeof loginUserSchema>;

const LoginForm = () => {
  const loginUserForm = useForm<IUser>({
    resolver: zodResolver(loginUserSchema),
  });
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function loginUser(data: IUser) {
    userLogin(data);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginUserForm;

  return (
    <section className={`${styles.loginContainer} container`}>
      <TitleComponent>
        <img src={assets.decTitlePurple} alt="" /> <h1>LOGAR</h1>
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
                <LabelForm htmlFor="password">PASSWORD</LabelForm>
                <InputForm type="password" name="password" />

                <ErrorForm field="password" />
              </div>
              {error && <ErrorGeneral error={error} />}

              {loading ? (
                <ButtonForm disabled background="hsl(268, 56%, 70%)">
                  CARREGANDO...
                </ButtonForm>
              ) : (
                <ButtonForm background="hsl(268, 56%, 70%)">LOGAR</ButtonForm>
              )}

              <Link className={styles.linkForm} to="/login/criar">
                não tem uma conta?cadastre-se
              </Link>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
