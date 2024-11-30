"use server";

export const mailSubscribe = async (email: string) => {
  const body = { email };
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}email/subscribe`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Kiểm tra nếu phản hồi không phải 2xx
    if (!res.ok) {
      const errorDetails = await res.json(); // Lấy thông tin chi tiết lỗi từ server (nếu có)
      throw new Error(
        `Error ${res.status}: ${errorDetails.message || "Unknown error"}`
      );
    }

    // Xử lý dữ liệu trả về (nếu có)
    const data = await res.json();
    console.log("Subscription successful:", data);
  } catch (error) {
    // Ghi lỗi nếu có
    console.error("Subscription failed:", error);
    throw error; // Ném lỗi tiếp để xử lý ở nơi khác nếu cần
  }
};
