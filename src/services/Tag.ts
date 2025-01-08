import { API_URL, API_VERSION } from "@/constants/base";
import { Tags } from "@/interfaces/Tag";

export async function GetAllHashtag(): Promise<Tags> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}hashtags`, {
      cache: "force-cache",
      next: { revalidate: 600, tags: ["blogs", "blog"] },
    });
    if (!res.ok) throw new Error(`Lỗi khi tải hashtag: ${res.statusText}`);
    const data = await res.json().catch(() => []);

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy hashtag:", error); // Log chi tiết lỗi
    throw new Error("Đã xảy ra lỗi khi lấy hashtag."); // Thông báo lỗi chi tiết bằng tiếng Việt
  }
}

export async function GetAllCategories(): Promise<Tags> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}categories`, {
      cache: "force-cache",
      next: { revalidate: 600, tags: ["blogs", "blog"] },
    });
    if (!res.ok) throw new Error(`Lỗi khi tải danh mục: ${res.statusText}`);
    const data = await res.json().catch(() => []);

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error); // Log chi tiết lỗi
    throw new Error("Đã xảy ra lỗi khi lấy danh mục."); // Thông báo lỗi chi tiết bằng tiếng Việt
  }
}
