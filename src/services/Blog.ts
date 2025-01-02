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
  const url = `${API_URL}${API_VERSION}posts?p=${page}&q=${search}&tag=${tag}`;

  try {
    const res = await fetch(url, { next: { tags: ["blog"] } });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data) {
      throw new Error("No data returned from the server.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    throw error;
  }
}

export async function GetBlogBySlug({
  slug,
}: {
  slug: string;
}): Promise<BlogBySlug> {
  const url = `${API_URL}${API_VERSION}posts/${slug}`;

  try {
    const res = await fetch(url, {
      credentials: "include",
      next: { tags: ["blog"] },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog by slug. Status: ${res.status}`);
    }

    const data = await res.json();
    if (!data?.data) {
      throw new Error("No blog data found.");
    }
    return data.data;
  } catch (error) {
    console.error(`Error fetching blog by slug: ${slug}`, error);
    throw error;
  }
}
