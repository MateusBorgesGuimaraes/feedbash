import React from "react";
import styles from "./AddPost.module.css";
import { assets } from "../../../assets/assets";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "../../../Hooks/useFetch";
import LabelForm from "../../../components/Form/LabelForm/LabelForm";
import InputForm from "../../../components/Form/InputForm/InputForm";
import ErrorForm from "../../../components/Form/ErrorForm/ErrorForm";
import ErrorGeneral from "../../../components/ErrorGeneral/ErrorGeneral";
import ButtonForm from "../../../components/ButtonForm/ButtonForm";
import { UserContext } from "../../../Context/UserContext";
import { POST_POST } from "../../../Api";

const CreatePostSchema = z.object({
  name: z
    .string()
    .min(3, "Nome do post é obrigatorio e deve ter mais de 3 letras")
    .max(40, "Nome do post deve ter menos de 40 letras"),
  author: z
    .string()
    .min(3, "Nome do autor é obrigatorio e deve ter mais de 3 letras")
    .max(20, "Nome do autor deve ter menos de 20 letras"),
  focus: z
    .string()
    .min(3, "Foco é obrigatorio e deve ter mais de 3 letras")
    .max(20, "Nome do foco deve ter menos de 20 letras"),
  link: z.string().min(5, "Link é obrigatorio e deve ter mais de 5 letras"),
  scope: z
    .string()
    .min(3, "Escopo é obrigatorio e deve ter mais de 3 letras")
    .max(20, "Nome do Escopo deve ter menos de 20 letras"),
  category: z.enum(["video", "art", "photo", "writing"]),
});

type IPostCreate = z.infer<typeof CreatePostSchema>;

const AddPost = () => {
  const createPostForm = useForm<IPostCreate>({
    resolver: zodResolver(CreatePostSchema),
  });

  const { loading, error, request } = useFetch();
  const token = window.localStorage.getItem("token");

  async function createPost(data: IPostCreate) {
    if (!token) return;
    const { url, options } = POST_POST(data, token);
    const { response } = await request(url, options);
    if (!response || !response.ok) console.log("erro ao realizar a operação");
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createPostForm;

  return (
    <section className={`${styles.loginContainer} container`}>
      <div className={`${styles.containerForm}`}>
        <div className={styles.imgSection}>
          <img src={assets.addPost} alt="" />
        </div>
        <div className={styles.formSection}>
          <FormProvider {...createPostForm}>
            <form
              className={styles.formSectionContainer}
              onSubmit={handleSubmit(createPost)}
            >
              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="name">
                  Nome da Postagem
                </LabelForm>
                <InputForm
                  newBorder="var(--blue-300)"
                  newColor="var(--blue-800)"
                  type="text"
                  name="name"
                />

                <ErrorForm field="name" />
              </div>

              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="author">
                  Nome Publicado
                </LabelForm>
                <InputForm
                  newBorder="var(--blue-300)"
                  newColor="var(--blue-800)"
                  type="text"
                  name="author"
                />

                <ErrorForm field="author" />
              </div>

              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="focus">
                  Foco da Analise
                </LabelForm>
                <InputForm
                  newBorder="var(--blue-300)"
                  newColor="var(--blue-800)"
                  type="text"
                  name="focus"
                />

                <ErrorForm field="focus" />
              </div>

              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="scope">
                  Escopo do Post
                </LabelForm>
                <InputForm
                  newBorder="var(--blue-300)"
                  newColor="var(--blue-800)"
                  type="text"
                  name="scope"
                />

                <ErrorForm field="scope" />
              </div>

              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="link">
                  Link
                </LabelForm>
                <InputForm
                  newBorder="var(--blue-300)"
                  newColor="var(--blue-800)"
                  type="text"
                  name="link"
                />

                <ErrorForm field="link" />
              </div>

              <div className={styles.formFild}>
                <LabelForm colorNew="var(--blue-100)" htmlFor="category">
                  CATEGORIA
                </LabelForm>
                <Controller
                  name="category"
                  control={createPostForm.control}
                  render={({ field }) => (
                    <select className={styles.selectAdd} {...field}>
                      <option className={styles.optionAdd} value="">
                        Selecione uma categoria
                      </option>
                      <option value="video">Video</option>
                      <option value="art">Art</option>
                      <option value="photo">Photo</option>
                      <option value="writing">Writing</option>
                    </select>
                  )}
                />
                <ErrorForm field="category" />
              </div>

              {error && <ErrorGeneral error={error} />}
              {loading ? (
                <ButtonForm
                  className={styles.btnEnd}
                  disabled
                  background="hsl(218, 47%, 47%)"
                >
                  POSTANDO...
                </ButtonForm>
              ) : (
                <ButtonForm
                  className={styles.btnEnd}
                  background="hsl(218, 47%, 47%)"
                >
                  POSTAR
                </ButtonForm>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
