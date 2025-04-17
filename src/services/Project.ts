import { API_URL, API_VERSION } from "@/constants/base";
import { Project, Projects } from "@/interfaces/Project";
import { notFound } from "next/navigation";

export const getAllProject = async (): Promise<Projects> => {
  const url = `${API_URL}${API_VERSION}projects`;
  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Lỗi khi lấy danh sách dự án: ${res.status} - ${res.statusText}`
      );
    }

    const data = await res.json();
    return data;
  } catch {
    throw new Error("Đã xảy ra lỗi khi lấy danh sách dự án.");
  }
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const url = `${API_URL}${API_VERSION}projects/${slug}`;
  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Lỗi khi lấy dự án: ${res.status} - ${res.statusText}`);
    }

    const data = (await res.json()) as Projects;
    if (data.data.length === 0) {
      notFound();
    }
    return data.data[0];
  } catch {
    throw new Error("Đã xảy ra lỗi khi lấy dự án.");
  }
};
