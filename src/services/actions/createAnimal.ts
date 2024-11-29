"use server";

export const createAnimalSticker = async (payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ANIMAL_STICKER_API_URL}/animal/create`,
      {
        method: "POST",

        body: payload,
        cache: "no-store",
      }
    );

    const animal = await res.json();

    return animal;
  } catch (error) {
    console.log(error);
  }
};
