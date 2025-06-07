export default function Banner() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 bg-[url('/images/banner-coffee.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900 mb-4 drop-shadow-lg">
          WELCOME TO <span className="text-amber-700">ABCOFFEE</span>
        </h1>
        <p className="text-lg md:text-xl text-amber-800 mb-6">
          Thưởng thức hương vị cà phê nguyên chất, không gian ấm cúng và dịch vụ tận tâm.
        </p>
        <a
          href="#menu"
          className="inline-block bg-amber-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-amber-800 transition"
        >
          Xem Menu
        </a>
      </div>
      <img
        src="https://product.hstatic.net/1000075078/product/1737356461_hi-tea-vai_5cae2b0e46b846c6b596f5bdf61a43a2_large.png"
        alt="Coffee Cup"
        className="w-52 md:w-72 mt-8 md:mt-0 drop-shadow-xl"
      />
    </section>
  );
}