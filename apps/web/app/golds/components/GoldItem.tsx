import { Gold } from "../types";

const GoldItem = ({ kind, purify, price }: Gold) => {
  return (
    <div className="border-teal-100 p-4 rounded-md">
      <header>
        {kind} - {purify}
      </header>
      {price}
    </div>
  );
};

export default GoldItem;
