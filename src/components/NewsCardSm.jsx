import Image from "next/image";
import { BookmarkIcon } from "./icon";

// utils
import { newsTagName } from '../utils/newsTagName'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { saveThisNews, addDetailNewsOnClick } from '../features/news-slice'

export default function NewsCardSm({ article, router }) {
  const dispatch = useDispatch()
  const savedNews = useSelector(state => state.news.data.saved)

  const handleRedirectToDetailNews = () => {
    dispatch(addDetailNewsOnClick(article))
    if (router.pathname == '/') router.push(`/indonesia/${article.title}`)
    if (router.pathname == '/programming') router.push(`/programming/${article.title}`)
    if (router.pathname == '/covid19') router.push(`/covid19/${article.title}`)
  }

  const handleBookmarkAndUnBookmark = () => dispatch(saveThisNews({ article }))

  const IconBookmarkOrUnBookmark = () => {
    const result = savedNews.some(item => item.article.title === article.title)
    if (result) return <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-3 w-3" />
    if (!result) return <BookmarkIcon color="text-grey-300 hover:text-grey-400" size="h-3 w-3" />
  }

  return (
    <div className="flex space-x-3 group">
      <div className="h-24 w-24 relative bg-black">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src={`/api/imageproxy?url=${encodeURIComponent(article?.urlToImage)}` || "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"}
          className="group-hover:opacity-80 duration-300"
        />
        <button className="absolute top-1 right-1 h-6 w-6 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center" onClick={handleBookmarkAndUnBookmark}>
          <IconBookmarkOrUnBookmark />
        </button>
      </div>
      <div className="w-[calc(100%-6rem)] cursor-pointer" onClick={handleRedirectToDetailNews}>
        <p className="font-extrabold uppercase text-xs lg:text-sm mt-2">
          {newsTagName()}{" "}
          <span className="font-medium lowercase">/ {article?.publishedAt}</span>
        </p>
        <h5 className="oswald font-extrabold text-gray-800 text-sm lg:text-base">
          {article?.title}
        </h5>
      </div>
    </div>
  );
}
