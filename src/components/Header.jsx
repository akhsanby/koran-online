import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  BookmarkIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from './icon';
import Navigation from './Navigation';

// redux

export default function Header() {
  const savedNews = useSelector((state) => state.news.data.saved);

  return (
    <>
      <header className="bg-black text-white">
        <div className=" flex py-4 mx-auto px-1 xs:px-0 xs:w-11/12">
          <div className="flex-1 flex items-center space-x-3">
            {socialMedias.map((e, i) => (
              <a
                key={i}
                href="#"
                className={`${e.color} rounded-full bg-gray-800 h-10 w-10 hidden md:flex items-center justify-center duration-150`}
              >
                {e.icon}
              </a>
            ))}
          </div>
          <Link href="/">
            <a className="flex-[6] xs:flex-[3] text-2xl xs:text-5xl text-green-400 text-center oswald font-extrabold uppercase">
              koran online
            </a>
          </Link>
          <div className="flex-1 flex items-center justify-end space-x-2">
            <BookmarkIcon />
            <Link href="/saved">
              <a className="h-[22px] w-[22px] text-[10px] font-semibold grid place-items-center bg-gray-700 hover:bg-green-400 duration-300 rounded-full">
                {savedNews.length}
              </a>
            </Link>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}

const socialMedias = [
  {
    name: 'facebook',
    icon: <FacebookIcon />,
    color: 'hover:bg-[#3b5998]',
  },
  {
    name: 'twitter',
    icon: <TwitterIcon />,
    color: 'hover:bg-[#00acee]',
  },
  {
    name: 'instagram',
    icon: <InstagramIcon />,
    color: 'instagram-color',
  },
  {
    name: 'youtube',
    icon: <YoutubeIcon />,
    color: 'hover:bg-[#FF0000]',
  },
];
