export default function Header() {
  return (
    <header className="w-full py-6 px-4 bg-white/80 shadow-md flex flex-col items-center md:flex-row md:justify-between md:items-center">
      <div className="flex items-center gap-3">

        <span className="text-3xl font-bold text-amber-800 tracking-wide">
          ABCOFFEE
        </span>
      </div>
      <nav className="mt-4 md:mt-0 flex gap-6 text-amber-700 font-medium">
        <a href="#" className="hover:text-amber-900 transition">Trang chủ</a>
        <a href="#" className="hover:text-amber-900 transition">Menu</a>
        <a href="#" className="hover:text-amber-900 transition">Về chúng tôi</a>
        <a href="#" className="hover:text-amber-900 transition">Liên hệ</a>
      </nav>
    </header>
  );
}