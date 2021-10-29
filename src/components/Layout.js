import Footer from "./Footer";
import Header from "./Header";
import HotNews from "./HotNews";

export default function Layout({ children }) {
  return (
    <div className="text-gray-700 roboto min-h-screen">
      <Header />
      <div className="px-1 sm:px-4 md:px-0 md:w-11/12 mx-auto mt-2 mb-10 md:flex space-x-6">
        <main className="flex-[3]">{children}</main>
        <aside className="flex-1 mt-10 hidden md:block">
          <HotNews />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
