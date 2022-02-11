import Image from "next/image";
import Link from "next/link";

// icon
import { BookmarkIcon } from "./icon";

// utils
import { formatDate, isNewsSaved, href } from "../utils";

// redux
import { addDetailNews } from "../features/news-slice";
import { useDispatch } from "react-redux";

export default function NewsCardXl({ news }) {
  const dispatch = useDispatch();

  function handleSetDetail() {
    dispatch(addDetailNews(news));
  }

  function handleSaveNews() {
    dispatch(saveThisNews(news));
  }

  return (
    <div className="flex group">
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-2/5 md:w-1/2 lg:w-1/3 relative bg-black group">
        <Image alt="random-pic" layout="fill" objectFit="cover" src={`/api/imageproxy?url=${encodeURIComponent(news?.urlToImage)}` || null} className="group-hover:opacity-80 duration-300" />
        <button onClick={handleSaveNews} className="absolute top-2 right-2 h-8 w-8 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
          <BookmarkIcon color={isNewsSaved(news) ? "text-yellow-300 hover:text-yellow-400" : "text-grey-300 hover:text-grey-400"} size="h-4 w-4" />
        </button>
      </div>
      <Link href={{ pathname: href(news), query: { title: news.title } }}>
        <a onClick={handleSetDetail} className="h-[120px] xs:h-[180px] lg:h-[229px] w-3/5 md:w-1/2 lg:w-2/3 px-4 lg:px-6 text-justify xs:border-t border-gray-300 flex flex-col lg:justify-center cursor-pointer">
          <p className="font-extrabold uppercase text-xs lg:text-sm xs:mt-4 lg:mt-2 mb-1 lg:mb-0">
            {news?.source.name} <span className="font-medium">- {formatDate(news?.publishedAt)}</span>
          </p>
          <h2 className="oswald font-extrabold xs:text-2xl lg:text-3xl text-gray-800 group-hover:text-gray-600 duration-200 text-dot">{news?.title}</h2>
          <p className="mt-3 text-gray-500 hidden lg:block">{news?.description}</p>
        </a>
      </Link>
    </div>
  );
}
