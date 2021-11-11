import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { BookmarkIcon } from './icon';

// utils
import {
  UseNewsCategoryName,
  formatDate,
  handleBookmarkAndUnBookmark,
  handleRedirectToDetailNews,
} from '../utils';

export default function NewsCardXl({ article, router }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const IconBookmarkOrUnBookmark = () => {
    const result = savedNews.some((item) => item.article.title === article.title);
    if (result) return <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-4 w-4" />;
    if (!result) return <BookmarkIcon color="text-grey-300 hover:text-grey-400" size="h-4 w-4" />;
  };

  return (
    <div className="flex group">
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-2/5 md:w-1/2 lg:w-1/3 relative bg-black group">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src={`/api/imageproxy?url=${encodeURIComponent(article?.urlToImage)}` || 'https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg'}
          className="group-hover:opacity-80 duration-300"
        />
        <button className="absolute top-2 right-2 h-8 w-8 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center" onClick={() => handleBookmarkAndUnBookmark(dispatch, article)}>
          <IconBookmarkOrUnBookmark />
        </button>
      </div>
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-3/5 md:w-1/2 lg:w-2/3 px-4 lg:px-6 text-justify xs:border-t border-gray-300 flex flex-col lg:justify-center cursor-pointer" onClick={() => handleRedirectToDetailNews(dispatch, router, article)}>
        <p className="font-extrabold uppercase text-xs lg:text-sm xs:mt-4 lg:mt-2 mb-1 lg:mb-0">
          <UseNewsCategoryName />
          {' '}
          <span className="font-medium">
            /
            {formatDate(article?.publishedAt)}
          </span>
        </p>
        <h2 className="oswald font-extrabold xs:text-2xl lg:text-3xl text-gray-800 group-hover:text-gray-600 duration-200">
          {article?.title}
        </h2>
        <p className="mt-3 text-gray-500 hidden lg:block">
          {article?.description}
        </p>
      </div>
    </div>
  );
}
