import Image from "next/image";
import Link from "next/link";

// icon
import { BookmarkIcon } from "./icon";

// utils
import { formatDate, isNewsSaved, href } from "../utils";

// redux
import { addDetailNews, saveThisNews } from "../features/news-slice";
import { useDispatch } from "react-redux";

export default function NewsCardLg({ news }) {
  const dispatch = useDispatch();

  function handleSetDetail() {
    dispatch(addDetailNews(news));
  }

  function handleSaveNews() {
    dispatch(saveThisNews(news));
  }

  return (
    <div className="group block">
      <div className="relative bg-black h-[120px] xs:h-[155px]">
        <Image alt="random-pic" layout="fill" objectFit="cover" src={`/api/imageproxy?url=${encodeURIComponent(news?.urlToImage)}` || null} className="group-hover:opacity-80 duration-300" />
        <button onClick={handleSaveNews} className="absolute top-2 right-2 h-8 w-8 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
          <BookmarkIcon color={isNewsSaved(news) ? "text-yellow-300 hover:text-yellow-400" : "text-grey-300 hover:text-grey-400"} size="h-4 w-4" />
        </button>
      </div>
      <Link href={{ pathname: href(news), query: { title: news.title } }}>
        <a onClick={handleSetDetail} className="cursor-pointer">
          <p className="font-extrabold uppercase text-xs lg:text-sm mt-2 mb-1 lg:mb-0">
            {news?.source.name} <span className="font-medium">- {formatDate(news?.publishedAt)}</span>
          </p>
          <h4 className="oswald font-extrabold xs:text-xl lg:text-2xl text-gray-800 group-hover:text-gray-500 text-dot">{news?.title}</h4>
        </a>
      </Link>
    </div>
  );
}
