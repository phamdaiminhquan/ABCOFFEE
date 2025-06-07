"use client";
import { useEffect, useState } from "react";
import { Drink } from "@/types/drink";
import DrinkCard from "@/components/DrinkCard";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const mockDrinks: Drink[] = [
	{
		_id: "1",
		name: "Cà Phê Đường Đen Sữa Đá",
		description: "Nếu chuộng vị cà phê đậm đà, bùng nổ và thích vị đường đen ngọt thơm, Đường Đen Sữa Đá đích thị là thức uống dành cho bạn. Không chỉ giúp bạn tỉnh táo buổi sáng, Đường Đen Sữa Đá còn hấp dẫn đến ngụm cuối cùng bởi thạch cà phê giòn dai, nhai cực cuốn. - Khuấy đều trước khi sử dụng",
		price: 45000,
		imageUrl: "https://product.hstatic.net/1000075078/product/1737357048_uong-den-sua-da_5876b3829fe94af788996ca234a7894f.png",
	},
	{
		_id: "2",
		name: "Cà Phê Sữa Đá",
		description: "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.",
		price: 39000,
		imageUrl: "https://product.hstatic.net/1000075078/product/1737357037_tch-sua-da_a83639744db94a7a96c1fd6b08e023e1.png",
	},
	{
		_id: "3",
		name: "Bạc xỉu",
		description: "Bạc xỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
		price: 39000,
		imageUrl: "https://product.hstatic.net/1000075078/product/1737357020_bac-xiu-da_43a593b61b8e44379111a9ebb00904d9.png",
	},
	{
		_id: "4",
		name: "Espresso",
		description: "Cà phê Ý đậm đà, thơm nồng.",
		price: 35000,
		imageUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Freeze_Cookie___Cream.jpg",
	},
	{
		_id: "5",
		name: "Latte",
		description: "Cà phê sữa kiểu Ý, vị nhẹ nhàng.",
		price: 40000,
		imageUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__FREEZE_CHOCO.jpg",
	},
	{
		_id: "6",
		name: "Trà sữa trân châu",
		description: "Trà sữa thơm béo, topping trân châu dai ngon.",
		price: 32000,
		imageUrl: "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__CARAMEL_FREEZE_PHINDI.jpg",
	},
];

export default function Home() {
	const [drinks, setDrinks] = useState<Drink[]>([]);

	useEffect(() => {
		setDrinks(mockDrinks);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200 flex flex-col">
			<Header />
			<Banner />
			<main
				id="menu"
				className="flex-1 px-4 py-12 md:px-20 bg-transparent"
			>
				<h2 className="text-3xl font-bold text-center text-amber-900 mb-10">
					Menu
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{drinks.map((drink) => (
						<DrinkCard key={drink._id} drink={drink} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
