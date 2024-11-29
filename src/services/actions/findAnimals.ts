"use server";

export const findAnimals = async (query: { query?: { category: string } }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ANIMAL_STICKER_API_URL}/animal?${query}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    const animals = await res.json();

    return animals;
  } catch (error) {
    console.log(error);
  }
};
