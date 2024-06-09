export type SavedCommentInterface = {
  postId: string;
  commentId: string;
};

export type UserInterface = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  isAdmin?: boolean;
  savedComments: SavedCommentInterface[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type LoginInterface = {
  name: string;
  password: string;
};

export type PostInterface = {
  name: string;
  author: string;
  authorId: string;
  focus: string;
  scope: string;
  link: string;
  _id: string;
  category: "video" | "art" | "photo" | "writing";
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
  updatedAt?: Date;
};

export type CommentInterface = {
  _id?: string;
  author: string;
  comment: string;
  postId: string;
  authorId: string;
  reports?: string[];
  photoUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt?: string;
  updatedAt?: Date;
};

export function formatarDatasComentarios(comment: string) {
  let secondPart;
  const firstPart = comment?.split("-");
  if (firstPart) {
    secondPart = firstPart[2].split("T");
  }
  if (secondPart && firstPart)
    return `${secondPart[0]}/${firstPart[1]}/${firstPart[0]}`;
}
