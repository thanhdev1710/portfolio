export type RootListBlog = {
  status: string;
  totalItem: number;
  totalPage: number;
  data: Blog[];
};

export type ListSectionBlog = SectionBlog[];

export interface Blog {
  id: number;
  slug: string;
  title: string;
  updatedAt: string;
  status: string;
  idUser: number;
  nameUser: string;
  emailUser: string;
  imageUser: string;
  roleUser: "admin" | "author" | "editor" | "subscriber";
  tags: string[];
  duration: number;
  categories: string[];
  countView: number;
  countBookmark: number;
  countComment: number;
  countLike: number;
  countDislike: number;
}

export interface BlogBySlug extends Blog {
  summary: string;
  content: string;
  image?: string;
}

export interface SectionBlog {
  id: number;
  postId: number;
  title?: string;
  content: string;
  imageUrl?: string;
  altText?: string;
  createdAt: string;
  updatedAt: string;
  position: number;
}
