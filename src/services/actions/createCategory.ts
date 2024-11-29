"use server";

export const createCategory = async (payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ANIMAL_STICKER_API_URL}/category/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const category = await res.json();

    return category;
  } catch (error) {
    console.log(error);
  }
};
