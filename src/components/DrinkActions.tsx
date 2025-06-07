type DrinkActionsProps = {
  onFavorite?: () => void;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
};

export default function DrinkActions(props: DrinkActionsProps) {
  return (
    <div className="w-full flex h-16">
      {/* Bên trái: 2 nút nhỏ, nền nhạt */}
      <div className="flex flex-1 bg-amber-50 md:rounded-bl-2xl overflow-hidden">
        <button
          className="flex-1 flex items-center justify-center border-r border-amber-100 hover:bg-amber-100 transition"
          onClick={props.onFavorite}
          title="Yêu thích"
        >
          {/* Icon trái tim nét đơn */}
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#b45309"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 7.5a4.5 4.5 0 0 0-6.36 0L12 8.64l-1.14-1.14a4.5 4.5 0 1 0-6.36 6.36l1.14 1.14L12 20.25l6.36-6.36 1.14-1.14a4.5 4.5 0 0 0 0-6.36z" />
          </svg>
        </button>
        <button
          className="flex-1 flex items-center justify-center hover:bg-amber-100 transition"
          onClick={props.onAddToCart}
          title="Thêm vào giỏ"
        >
          {/* Icon giỏ hàng nét đơn */}
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#b45309"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
            <path d="M3 4h2l.4 2M7 13h10l4-8H5.4" />
            <path d="M7 13l-1.5 7h13" />
          </svg>
        </button>
      </div>
      {/* Bên phải: nút mua ngay, nền đậm */}
      <button
        className="flex-1 bg-amber-700 text-white font-semibold md:rounded-br-2xl flex items-center justify-center text-base hover:bg-amber-800 transition"
        onClick={props.onBuyNow}
        title="Mua ngay"
      >
        Mua ngay
      </button>
    </div>
  );
}