export interface Bookmarks {
  status: string;
  data: Bookmark[];
}

export interface Bookmark {
  createdAt: string;
  title: string;
  slug: string;
  image: null | string;
  summary: string;
}
