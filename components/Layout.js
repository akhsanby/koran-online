import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="text-gray-700 roboto">
      <Header navs={navs} />
      <main className="w-11/12 mx-auto mt-2 mb-10">{children}</main>
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
