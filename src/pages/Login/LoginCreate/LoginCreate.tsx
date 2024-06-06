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
import useFetch from "../../../Hooks/useFetch";
import { USER_POST } from "../../../Api";
import { UserContext } from "../../../Context/UserContext";
import ErrorGeneral from "../../../components/ErrorGeneral/ErrorGeneral";

const CreateUserSchema = z.object({
  name: z
    .string()
    .min(3, "Nome do usuario é obrigatorio e deve ter mais de 3 letras"),
  email: z
    .string()
    .min(1, "O Email é obrigatorio")
    .email("O formato do email esta incorreto"),
  password: z.string().min(3, "Senha obrigatoria e deve ter mais de 3 letras"),
  photoUrl: z.string().optional(),
});

type IUserCreate = z.infer<typeof CreateUserSchema>;

const LoginCreate = () => {
  const createUserForm = useForm<IUserCreate>({
    resolver: zodResolver(CreateUserSchema),
  });

  const { loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  async function createUser(data: IUserCreate) {
    if (!data.photoUrl) {
      data.photoUrl = "https://i.imgur.com/qh2hZjV.jpeg";
    }
    const { url, options } = USER_POST(data);
    const { response } = await request(url, options);
    if (response && response.ok) userLogin(data);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createUserForm;

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
          <FormProvider {...createUserForm}>
            <form
              className={styles.formSectionContainer}
              onSubmit={handleSubmit(createUser)}
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

              {error && <ErrorGeneral error={error} />}
              {loading ? (
                <ButtonForm disabled background="hsl(268, 56%, 70%)">
                  CADASTRANDO...
                </ButtonForm>
              ) : (
                <ButtonForm background="hsl(268, 56%, 70%)">
                  CADASTRAR
                </ButtonForm>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default LoginCreate;
