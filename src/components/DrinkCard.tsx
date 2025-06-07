import { Drink } from "@/types/drink";
import { useRouter } from "next/navigation";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/drinks/${drink._id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-amber-200 transition p-5 flex flex-col items-center cursor-pointer"
      onClick={handleClick}
      title={`Xem chi tiết ${drink.name}`}
    >
      <img
        src={drink.imageUrl}
        alt={drink.name}
        className="w-full h-70 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-amber-800 mb-1">{drink.name}</h3>
      <span className="font-bold text-lg text-amber-700 mb-2">
        {drink.price.toLocaleString()} VND
      </span>
    </div>
  );
}