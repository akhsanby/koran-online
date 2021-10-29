import Image from "next/image";
import { BookmarkIcon } from "./icon";

export default function NewsCardSm({ article, router }) {
  const newsTagName = () => {
    if(router.pathname == '/') return 'Indonesia'
    if(router.pathname == '/programming') return 'Programming'
    if(router.pathname == '/covid19') return 'Covid 19'
  }
  
  return (
    <a href="#" className="flex space-x-3 group">
      <div className="h-24 w-24 relative bg-black">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src={`/api/imageproxy?url=${encodeURIComponent(article?.urlToImage)}` || "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"}
          className="group-hover:opacity-80 duration-300"
        />
        <button className="absolute top-1 right-1 h-6 w-6 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
          <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-3 w-3" />
        </button>
      </div>
      <div className="w-[calc(100%-6rem)]">
        <p className="font-extrabold uppercase text-xs lg:text-sm mt-2">
          {newsTagName()}{" "}
          <span className="font-medium lowercase">/ {article?.publishedAt}</span>
        </p>
        <h5 className="oswald font-extrabold text-gray-800 text-sm lg:text-base">
          {article?.title}
        </h5>
      </div>
    </a>
  );
}
