import { API_URL, API_VERSION } from "@/constants/base";
import { RootListBlog, BlogBySlug } from "@/interfaces/Blog";

export async function GetListBlog({
  page = 1,
  search = "",
  tag = "",
  category = "",
}: {
  page?: number;
  search?: string;
  tag?: string;
  category?: string;
}): Promise<RootListBlog> {
  const url = `${API_URL}${API_VERSION}posts?p=${page}&q=${search}&tag=${tag}&category=${category}`;

  try {
    const res = await fetch(url, { next: { tags: ["blog"] } });

    if (!res.ok) {
      throw new Error(
        `Lỗi khi tải danh sách blog. Trạng thái: ${res.status} - ${res.statusText}`
      );
    }

    const data = await res.json();

    if (!data) {
      throw new Error("Không có dữ liệu trả về từ máy chủ.");
    }

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết:", error);
    throw new Error("Đã xảy ra lỗi khi lấy danh sách bài viết.");
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
      throw new Error(
        `Lỗi khi lấy bài viết theo slug: ${res.status} - ${res.statusText}`
      );
    }

    const data = await res.json();
    if (!data?.data) {
      throw new Error("Không tìm thấy dữ liệu bài viết.");
    }
    return data.data;
  } catch (error) {
    console.error(`Lỗi khi lấy bài viết theo slug: ${slug}`, error);
    throw new Error("Đã xảy ra lỗi khi lấy bài viết.");
  }
}
