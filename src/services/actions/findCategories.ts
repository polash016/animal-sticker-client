"use server";

export const findCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ANIMAL_STICKER_API_URL}/category`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    const category = await res.json();

    return category;
  } catch (error) {
    console.log(error);
  }
};
