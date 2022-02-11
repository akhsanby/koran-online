import Image from "next/image";
import Link from "next/link";

// icon
import { BookmarkIcon } from "./icon";

// utils
import { formatDate, isNewsSaved, href } from "../utils";

// redux
import { addDetailNews, saveThisNews } from "../features/news-slice";
import { useDispatch } from "react-redux";

export default function NewsCard2xl({ news }) {
  const dispatch = useDispatch();

  function handleSetDetail() {
    dispatch(addDetailNews(news));
  }

  function handleSaveNews() {
    dispatch(saveThisNews(news));
  }

  return (
    <div className="h-[480px] xs:h-[600px] relative block group bg-black">
      <Image alt="random-pic" layout="fill" objectFit="cover" src={`/api/imageproxy?url=${encodeURIComponent(news?.urlToImage)}` || null} className="group-hover:opacity-80 duration-300" loading="lazy" />
      <button onClick={handleSaveNews} className="absolute top-2 right-2 h-12 w-12 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
        <BookmarkIcon color={isNewsSaved(news) ? "text-yellow-300 hover:text-yellow-400" : "text-grey-300 hover:text-grey-400"} size="h-6 w-6" />
      </button>
      <Link href={{ pathname: href(news), query: { title: news.title } }}>
        <a onClick={handleSetDetail} className="absolute left-0 bottom-0 p-5 bg-gradient-to-t from-black via-gray-900/75 cursor-pointer">
          <p className="font-extrabold uppercase text-sm mt-2 text-green-400">
            {news?.source.name} <span className="font-medium text-white">- {formatDate(news?.publishedAt)}</span>
          </p>
          <h1 className="oswald font-extrabold text-4xl xs:text-5xl text-white text-dot">{news?.title}</h1>
          <p className="mt-3 text-white hidden xs:block">{news?.description}</p>
        </a>
      </Link>
    </div>
  );
}
