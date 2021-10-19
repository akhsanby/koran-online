import Link from "next/link";
import {
  BookmarkIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icon";

export default function Header() {
  return (
    <>
      <header className="bg-black text-white">
        <div className=" flex py-4 mx-auto w-11/12">
          <div className="flex items-center flex-1 space-x-3">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
          <Link href="/">
            <a className="flex-[3] text-5xl text-green-400 text-center oswald font-extrabold uppercase">
              koran online
            </a>
          </Link>
          <div className="flex-1 flex items-center justify-end space-x-2">
            <BookmarkIcon />
            <span className="h-[22px] w-[22px] text-[10px] font-semibold grid place-items-center bg-gray-700 rounded-full">
              10
            </span>
          </div>
        </div>
      </header>
      <nav className="bg-white sticky top-0">
        <div className="w-11/12 mx-auto flex items-center">
          <div className="flex-1 h-full flex items-center">
            <MenuIcon />
          </div>
          <ul className="flex-[3] flex items-center justify-center space-x-6">
            {navs.map((nav, i) => (
              <li key={i}>
                <Link href={nav.link}>
                  <a className="uppercase py-2 block text-gray-600 border-b-4 border-transparent hover:border-green-300 oswald">
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
    </>
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
    link: "/entertainment",
  },
  {
    text: "politics",
    link: "/politics",
  },
  {
    text: "saved",
    link: "/saved",
  },
];
