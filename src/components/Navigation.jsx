import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// redux
import { MenuIcon, SearchIcon } from "./icon";

export default function Navigation() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const navs = [
    {
      text: "indonesia",
      link: "/",
      active: router.pathname === "/" || router.pathname === "/indonesia/[detail]" ? true : false,
    },
    {
      text: "programming",
      link: "/programming",
      active: router.pathname === "/programming" || router.pathname === "/programming/[detail]" ? true : false,
    },
    {
      text: "covid19",
      link: "/covid19",
      active: router.pathname === "/covid19" || router.pathname === "/covid19/[detail]" ? true : false,
    },
    {
      text: "entertainment",
      link: "/entertainment",
      active: router.pathname === "/entertainment" || router.pathname === "/entertainment/[detail]" ? true : false,
    },
    {
      text: "sports",
      link: "/sports",
      active: router.pathname === "/sports" || router.pathname === "/sports/[detail]" ? true : false,
    },
    {
      text: "technology",
      link: "/technology",
      active: router.pathname === "/technology" || router.pathname === "/technology/[detail]" ? true : false,
    },
    {
      text: "saved",
      link: "/saved",
      active: router.pathname === "/saved" || router.pathname === "/saved/[detail]" ? true : false,
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (!keyword) {
      return alert("Keyword cannot empty!");
    }
    router.push(`/search?keyword=${keyword}`);
    setKeyword("");
  }

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-lg py-2 lg:py-0">
      <div className="w-11/12 mx-auto flex items-center">
        <div className="flex-1 h-full flex items-center">
          <MenuIcon />
        </div>
        <ul className="flex-[3] hidden lg:flex items-center justify-center space-x-6">
          {navs.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link}>
                <a className={`uppercase pt-3 pb-1 block text-gray-600 border-b-4 ${nav.active ? "border-green-300" : "border-transparent"} hover:border-green-300 oswald`}>{nav.text}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 h-full flex items-center justify-end">
          <div className="inline-block relative">
            <form onSubmit={handleSubmit}>
              <input placeholder="search" className="border rounded-xl px-3 w-40" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
              <button type="submit" className="absolute right-2 top-0 h-full flex items-center">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
