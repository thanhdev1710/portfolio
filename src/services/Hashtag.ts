import { API_URL, API_VERSION } from "@/constants/base";
import { Hashtags } from "@/interfaces/Hashtag";

export async function GetAllHashtag(): Promise<Hashtags> {
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
