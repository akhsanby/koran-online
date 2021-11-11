import Image from 'next/image';
import { useSelector } from 'react-redux';
import {
  FacebookIcon,
  MailIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from './icon';
import Layout from './Layout';

// utils
import { UseNewsCategoryName, formatDate } from '../utils';

export default function DetailNews() {
  const detailNews = useSelector((state) => state.news.data?.detailNewsResult);

  return (
    <Layout>
      <h5 className="my-5">
        <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold inline-block">
          <UseNewsCategoryName />
        </span>
      </h5>
      <h1 className="oswald font-bold text-3xl xs:text-5xl text-gray-900">
        {detailNews?.title}
      </h1>
      <p className="text-lg font-semibold text-gray-500 my-5">
        {detailNews?.description}
      </p>
      <div className="flex items-center space-x-3">
        <div className="rounded-full h-16 w-16 border-2 bg-yellow-400" />
        <div className="text-sm font-semibold text-gray-500">
          <p>
            Published
            {formatDate(detailNews?.publishedAt)}
          </p>
          <p>
            By
            {' '}
            <b className="text-gray-900 font-bold">{detailNews?.author}</b>
          </p>
        </div>
      </div>
      <div className="h-[350px] sm:h-[492px] w-full my-5 relative">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src={`/api/imageproxy?url=${encodeURIComponent(detailNews?.urlToImage)}` || 'https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset.jpg'}
        />
      </div>
      <div className="xs:flex space-x-3 my-5">
        <div className="flex-1">
          <div className="flex xs:flex-col items-center justify-center space-x-3 xs:space-x-0 xs:space-y-3 xs:sticky top-20">
            {socialMedias.map((e, i) => (
              <a
                href="#"
                key={i}
                className={`${e.color} rounded-full h-12 w-12 text-white grid place-items-center`}
              >
                {e.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-[9] mt-3 xs:mt-0">
          <p className="text-gray-700 font-semibold text-lg whitespace-pre-wrap">
            {detailNews?.content}
          </p>
        </div>
      </div>
    </Layout>
  );
}

const socialMedias = [
  {
    name: 'facebook',
    icon: <FacebookIcon />,
    color: 'bg-[#3b5998]',
  },
  {
    name: 'twitter',
    icon: <TwitterIcon />,
    color: 'bg-[#00acee]',
  },
  {
    name: 'pinterest',
    icon: <PinterestIcon />,
    color: 'bg-[#c8232c]',
  },
  {
    name: 'mail',
    icon: <MailIcon />,
    color: 'bg-gray-400',
  },
  {
    name: 'whatsapp',
    icon: <WhatsappIcon />,
    color: 'bg-[#075E54]',
  },
];
