import { API_URL, API_VERSION } from "@/constants/base";
import { BlogBySlug, RootListBlog, ListSectionBlog } from "@/interfaces/Blog";

export async function GetListBlog({
  page = 1,
  search = "",
  tag = "",
}: {
  page?: number;
  search?: string;
  tag?: string;
}): Promise<RootListBlog> {
  try {
    const res = await fetch(
      `${API_URL}${API_VERSION}posts?p=${page}&q=${search}&tag=${tag}`,
      { next: { revalidate: 0 } }
    );
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetBlogBySlug({
  slug,
}: {
  slug: string;
}): Promise<BlogBySlug> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}posts/${slug}`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function GetSectionBlogById({
  id,
}: {
  id: number;
}): Promise<ListSectionBlog> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}posts/${id}/sections`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw error;
  }
}
