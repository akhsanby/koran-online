import Link from "next/link";
import { MenuIcon, SearchIcon } from "./icon";

export default function Navigation() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="w-11/12 mx-auto flex items-center">
        <div className="flex-1 h-full flex items-center">
          <MenuIcon />
        </div>
        <ul className="flex-[3] flex items-center justify-center space-x-6">
          {navs.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link}>
                <a className="uppercase pt-3 pb-1 block text-gray-600 border-b-4 border-transparent hover:border-green-300 oswald">
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 h-full flex items-center justify-end">
          <div className="inline-block relative">
            <input
              placeholder="search"
              className="border rounded-xl px-3 w-40"
            />
            <div className="absolute right-2 top-0 h-full flex items-center">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </nav>
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
