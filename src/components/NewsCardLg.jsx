import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { BookmarkIcon } from './icon';

// utils
import {
  UseNewsCategoryName,
  formatDate,
  handleRedirectToDetailNews,
  handleBookmarkAndUnBookmark,
} from '../utils';

export default function NewsCardLg({ article, router }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.news.data.saved);

  const IconBookmarkOrUnBookmark = () => {
    const result = savedNews.some((item) => item.article.title === article.title);
    if (result) return <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-4 w-4" />;
    if (!result) return <BookmarkIcon color="text-grey-300 hover:text-grey-400" size="h-4 w-4" />;
  };

  return (
    <div className="group block">
      <div className="relative bg-black h-[120px] xs:h-[155px]">
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
      <div className="cursor-pointer" onClick={() => handleRedirectToDetailNews(dispatch, router, article)}>
        <p className="font-extrabold uppercase text-xs lg:text-sm mt-2 mb-1 lg:mb-0">
          <UseNewsCategoryName />
          {' '}
          <span className="font-medium">
            /
            {formatDate(article?.publishedAt)}
          </span>
        </p>
        <h4 className="oswald font-extrabold xs:text-xl lg:text-2xl text-gray-800 group-hover:text-gray-500">
          {article?.title}
        </h4>
      </div>
    </div>
  );
}
