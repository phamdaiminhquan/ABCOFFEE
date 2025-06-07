import { notFound } from "next/navigation";
import { Drink } from "@/types/drink";
import DrinkActions from "@/components/DrinkActions";

// Dữ liệu mẫu (nên tách ra file riêng hoặc fetch từ API)
const mockDrinks: Drink[] = [
    {
        _id: "1",
        name: "Cà Phê Đường Đen Sữa Đá",
        description:
            "Nếu chuộng vị cà phê đậm đà, bùng nổ và thích vị đường đen ngọt thơm, Đường Đen Sữa Đá đích thị là thức uống dành cho bạn. Không chỉ giúp bạn tỉnh táo buổi sáng, Đường Đen Sữa Đá còn hấp dẫn đến ngụm cuối cùng bởi thạch cà phê giòn dai, nhai cực cuốn.",
        price: 45000,
        imageUrl:
            "https://product.hstatic.net/1000075078/product/1737357048_uong-den-sua-da_5876b3829fe94af788996ca234a7894f.png",
    },
    {
        _id: "2",
        name: "Cà Phê Sữa Đá",
        description:
            "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn.",
        price: 39000,
        imageUrl:
            "https://product.hstatic.net/1000075078/product/1737357037_tch-sua-da_a83639744db94a7a96c1fd6b08e023e1.png",
    },
    {
        _id: "3",
        name: "Bạc xỉu",
        description:
            "Bạc xỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
        price: 39000,
        imageUrl:
            "https://product.hstatic.net/1000075078/product/1737357020_bac-xiu-da_43a593b61b8e44379111a9ebb00904d9.png",
    },
];


export default async function DrinkDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const drink = mockDrinks.find((d) => d._id === id);

  if (!drink) return notFound();

  return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200 flex flex-col items-center pt-0 md:pt-5">
            <div
                className="
                    w-full 
                    md:max-w-2xl 
                    bg-white 
                    rounded-none md:rounded-2xl
                    shadow-xl 
                    flex flex-col
                    min-h-screen md:min-h-0
                "
            >
                {/* Nội dung card */}
                <div className="flex flex-col md:flex-row gap-6 flex-1 p-6 mb-3 md:p-0">
                    {/* Hình ảnh bên trái (trên mobile là trên) */}
                    <div className="w-full md:w-1/2 flex justify-center pt-4 items-center">
                        <img
                            src={drink.imageUrl}
                            alt={drink.name}
                            className="w-full h-wide object-cover rounded-none md:rounded-xl"
                        />
                    </div>
                    {/* Thông tin bên phải (trên mobile là dưới) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center pt-0 md:pt-4 md:pr-4">
                        <h1 className="text-3xl md:text-4xl font-semibold text-amber-900 mb-3">
                            {drink.name}
                        </h1>
                        <div className="text-2xl font-bold text-amber-700 mb-4">
                            {drink.price.toLocaleString()} VND
                        </div>
                        <p className="text-gray-700 text-base mb-6">
                            {drink.description}
                        </p>
                    </div>
                </div>
                {/* Footer card: combo nút bấm, chỉ hiện ở màn hình lớn */}
                <div className="hidden md:flex">
                    <DrinkActions />
                </div>
            </div>
            <div className="flex md:hidden fixed bottom-0 left-0 w-full z-50">
                <DrinkActions />
            </div>
        </div>
    );
}