import Image from "next/image";
import Link from "next/link";

// icon
import { BookmarkIcon } from "./icon";

// utils
import { formatDate, isNewsSaved, href } from "../utils";

// redux
import { addDetailNews, saveThisNews } from "../features/news-slice";
import { useDispatch } from "react-redux";

export default function NewsCardSm({ news }) {
  const dispatch = useDispatch();

  function handleSetDetail() {
    dispatch(addDetailNews(news));
  }

  function handleSaveNews() {
    dispatch(saveThisNews(news));
  }

  return (
    <div className="flex space-x-3 group">
      <div className="h-24 w-24 relative bg-black">
        <Image alt="random-pic" layout="fill" objectFit="cover" src={`/api/imageproxy?url=${encodeURIComponent(news?.urlToImage)}` || null} className="group-hover:opacity-80 duration-300" />
        <button onClick={handleSaveNews} className="absolute top-1 right-1 h-6 w-6 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
          <BookmarkIcon color={isNewsSaved(news) ? "text-yellow-300 hover:text-yellow-400" : "text-grey-300 hover:text-grey-400"} size="h-3 w-3" />
        </button>
      </div>
      <Link href={{ pathname: href(news), query: { title: news.title } }}>
        <a onClick={handleSetDetail} className="w-[calc(100%-6rem)] cursor-pointer">
          <p className="font-extrabold uppercase text-xs lg:text-sm mt-2">
            {news?.source.name} <span className="font-medium">- {formatDate(news?.publishedAt)}</span>
          </p>
          <h5 className="oswald font-extrabold text-gray-800 text-sm lg:text-base text-dot">{news?.title}</h5>
        </a>
      </Link>
    </div>
  );
}
