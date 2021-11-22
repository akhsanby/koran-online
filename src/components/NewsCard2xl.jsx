import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { BookmarkIcon } from './icon';

// utils
import {
  formatDate, 
  handleRedirectToDetailNews, 
  handleBookmarkAndUnBookmark,
} from '../utils';

// redux

export default function NewsCard2xl({ oneArticle, router }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const IconBookmarkOrUnBookmark = () => {
    const result = savedNews.some((item) => item.article.title === oneArticle?.title);
    if (result) return <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-6 w-6" />;
    if (!result) return <BookmarkIcon color="text-grey-300 hover:text-grey-400" size="h-6 w-6" />;
  };

  return (
    <div
      className="h-[480px] xs:h-[600px] relative block group bg-black"
    >
      <Image
        alt="random-pic"
        layout="fill"
        objectFit="cover"
        src={`/api/imageproxy?url=${encodeURIComponent(oneArticle?.urlToImage)}` || null}
        className="group-hover:opacity-80 duration-300"
        loading="lazy"
      />
      <button className="absolute top-2 right-2 h-12 w-12 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center" onClick={() => handleBookmarkAndUnBookmark(dispatch, oneArticle)}>
        <IconBookmarkOrUnBookmark />
      </button>
      <div className="absolute left-0 bottom-0 p-5 bg-gradient-to-t from-black via-gray-900/75 cursor-pointer" onClick={() => handleRedirectToDetailNews(dispatch, router, oneArticle)}>
        <p className="font-extrabold uppercase text-sm mt-2 text-green-400">
          {oneArticle?.source.name}
          {' '}
          <span className="font-medium text-white">
            /
            {' '}
            {formatDate(oneArticle?.publishedAt)}
          </span>
        </p>
        <h1 className="oswald font-extrabold text-4xl xs:text-5xl text-white">
          {oneArticle?.title}
        </h1>
        <p className="mt-3 text-white hidden xs:block">
          {oneArticle?.description}
        </p>
      </div>
    </div>
  );
}
