export type SavedCommentInterface = {
  commentId: string;
  postId: string;
};

export type UserInterface = {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  isAdmin?: boolean; // isAdmin é opcional porque tem um valor padrão
  savedComments: SavedCommentInterface[];
  createdAt?: Date; // Timestamps são opcionais porque serão gerados pelo Mongoose
  updatedAt?: Date; //
};

export type LoginInterface = {
  name: string;
  password: string;
};
