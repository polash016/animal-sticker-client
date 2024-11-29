import { findAnimals } from "@/services/actions/findAnimals";

export interface IAnimal {
  id: string;
  name: string;
  imgUrl?: string;
  categoryId: string;
}

const AllAnimals = async () => {
  const data = await findAnimals({});

  console.log(data);
  return (
    <div>
      {" "}
      {data?.data?.map((d: IAnimal) => (
        <p key={d.id}>{d.name}</p>
      ))}
    </div>
  );
};

export default AllAnimals;
