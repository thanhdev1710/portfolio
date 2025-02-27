import { auth } from "@/actions/authAction";
import { API_URL, API_VERSION } from "@/constants/base";
import { Bookmarks } from "@/interfaces/Bookmark";

export const getBookmarks = async () => {
  try {
    const session = await auth();

    const res = await fetch(`${API_URL}${API_VERSION}bookmark`, {
      headers: {
        Authorization: `Bearer ${session.data?.token}`,
      },
    });

    if (!res.ok) {
      throw new Error("");
    }

    const data: Bookmarks = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("");
    }
  }
};
