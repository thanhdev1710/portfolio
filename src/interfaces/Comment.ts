export type Comments = Comment[];

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  parentId: number | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  user_name: string;
  user_img: string;
  countDislike: number;
  countLike: number;
  likeUserIds: number[];
  dislikeUserIds: number[];
  replies?: Comment[];
}
