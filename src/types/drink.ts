interface Drink {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string; // nếu có phân loại như Cà phê, Trà, v.v.
  isFeatured?: boolean; // nếu có flag đánh dấu món nổi bật
}

export type { Drink };