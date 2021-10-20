import Footer from "./Footer";
import Header from "./Header";
import HotNews from "./HotNews";

export default function Layout({ children }) {
  return (
    <div className="text-gray-700 roboto min-h-screen">
      <Header navs={navs} />
      <div className="w-11/12 mx-auto mt-2 mb-10 flex space-x-6">
        <main className="flex-[3]">{children}</main>
        <aside className="flex-1 mt-10">
          <HotNews />
        </aside>
      </div>
      <Footer navs={navs} />
    </div>
  );
}

const navs = [
  {
    text: "indonesia",
    link: "/",
  },
  {
    text: "programming",
    link: "/programming",
  },
  {
    text: "covid19",
    link: "/covid19",
  },
  {
    text: "entertainment",
    link: "#",
  },
  {
    text: "politics",
    link: "#",
  },
  {
    text: "tech",
    link: "#",
  },
  {
    text: "saved",
    link: "/saved",
  },
];
