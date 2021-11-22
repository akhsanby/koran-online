import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { BookmarkIcon } from './icon';

// utils
import {
  formatDate,
  handleRedirectToDetailNews,
  handleBookmarkAndUnBookmark,
} from '../utils';

export default function NewsCardSm({ article, router }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const IconBookmarkOrUnBookmark = () => {
    const result = savedNews.some((item) => item.article.title === article.title);
    if (result) return <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-3 w-3" />;
    if (!result) return <BookmarkIcon color="text-grey-300 hover:text-grey-400" size="h-3 w-3" />;
  };

  return (
    <div className="flex space-x-3 group">
      <div className="h-24 w-24 relative bg-black">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src={`/api/imageproxy?url=${encodeURIComponent(article?.urlToImage)}` || null}
          className="group-hover:opacity-80 duration-300"
        />
        <button className="absolute top-1 right-1 h-6 w-6 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center" onClick={() => handleBookmarkAndUnBookmark(dispatch, article)}>
          <IconBookmarkOrUnBookmark />
        </button>
      </div>
      <div className="w-[calc(100%-6rem)] cursor-pointer" onClick={() => handleRedirectToDetailNews(dispatch, router, article)}>
        <p className="font-extrabold uppercase text-xs lg:text-sm mt-2">
          {article?.source.name}
          {' '}
          <span className="font-medium">
            /
            {formatDate(article?.publishedAt)}
          </span>
        </p>
        <h5 className="oswald font-extrabold text-gray-800 text-sm lg:text-base">
          {article?.title}
        </h5>
      </div>
    </div>
  );
}
