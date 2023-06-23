import { getGolds } from "../api";
import GoldItem from "./GoldItem";

const GoldList = async () => {
  const golds = await getGolds();

  return (
    <section className="grid grid-cols-3 gap-4">
      {golds.map((gold) => (
        <GoldItem key={gold.id} {...gold}></GoldItem>
      ))}
    </section>
  );
};

export default GoldList;
