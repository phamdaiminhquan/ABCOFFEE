export default function Footer() {
  return (
    <footer className="bg-white/80 py-6 mt-10 text-center text-amber-700 font-medium shadow-inner">
      © {new Date().getFullYear()} ABCOFFEE. All rights reserved.
    </footer>
  );
}