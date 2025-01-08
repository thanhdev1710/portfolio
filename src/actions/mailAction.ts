"use server";

export const mailSubscribe = async (formData: FormData) => {
  const email = formData.get("email");
  const body = {
    email,
  };

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

    if (!res.ok) {
      const errorDetails = await res.json();
      throw new Error(
        `Error ${res.status}: ${errorDetails.message || "Unknown error"}`
      );
    }

    await res.json();
  } catch (error) {
    throw error;
  }
};
