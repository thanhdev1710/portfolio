import { API_URL, API_VERSION } from "@/constants/base";
import { Tags } from "@/interfaces/Tag";

export async function GetAllHashtag(): Promise<Tags> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}hashtags`, {
      cache: "force-cache",
      next: { revalidate: 600, tags: ["blogs", "blog"] },
    });
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function GetAllCategories(): Promise<Tags> {
  try {
    const res = await fetch(`${API_URL}${API_VERSION}categories`, {
      cache: "force-cache",
      next: { revalidate: 600, tags: ["blogs", "blog"] },
    });
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
