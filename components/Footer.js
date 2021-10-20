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

export default function Footer() {
  return (
    <footer className="bg-[#111111] flex flex-col items-center">
      <Link href="/">
        <a className="flex-[3] text-6xl text-green-400 text-center oswald font-extrabold uppercase mt-7">
          koran online
        </a>
      </Link>
      <div className="space-x-3 flex my-6 text-white">
        {socialMedias.map((e, i) => (
          <a
            key={i}
            href="#"
            className={`${e.color} rounded-full bg-gray-700 h-10 w-10 flex items-center justify-center duration-150`}
          >
            {e.icon}
          </a>
        ))}
      </div>
      <nav className="mb-10">
        <ul className="flex space-x-5">
          {navs.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link}>
                <a className="uppercase font-thin tracking-wider text-sm pt-3 pb-1 block text-gray-500 border-b-4 border-transparent hover:text-white duration-300 oswald">
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

const socialMedias = [
  {
    name: "facebook",
    icon: <FacebookIcon />,
    color: "hover:bg-[#3b5998]",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    color: "hover:bg-[#00acee]",
  },
  {
    name: "pinterest",
    icon: <PinterestIcon />,
    color: "hover:bg-[#c8232c]",
  },
  {
    name: "instagram",
    icon: <InstagramIcon />,
    color: "instagram-color",
  },
  {
    name: "tiktok",
    icon: <TiktokIcon />,
    color: "hover:bg-[#000]",
  },
  {
    name: "youtube",
    icon: <YoutubeIcon />,
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "linkedIn",
    icon: <LinkedInIcon />,
    color: "hover:bg-[#0077b5]",
  },
  {
    name: "tumblr",
    icon: <TumblrIcon />,
    color: "hover:bg-[#34526f]",
  },
];

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
