import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TiktokIcon,
  TumblrIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icon";

export default function Footer({ navs }) {
  return (
    <footer className="bg-gray-900 flex flex-col items-center">
      <Link href="/">
        <a className="flex-[3] text-6xl text-green-400 text-center oswald font-extrabold uppercase mt-7">
          koran online
        </a>
      </Link>
      <div className="space-x-3 flex my-6 text-white">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
        <TiktokIcon />
        <YoutubeIcon />
        <LinkedInIcon />
        <TumblrIcon />
      </div>
      <nav className="mb-10">
        <ul className="flex space-x-5">
          {navs.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link}>
                <a className="uppercase font-thin text-sm pt-3 pb-1 block text-gray-400 border-b-4 border-transparent hover:text-white duration-300 oswald">
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-black py-3 w-full text-center text-white">
        copyright
      </div>
    </footer>
  );
}
