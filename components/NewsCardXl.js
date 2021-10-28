import Image from "next/image";
import { BookmarkIcon } from "./icon";

export default function NewsCardXl() {
  return (
    <a href="#" className="flex group">
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-2/5 md:w-1/2 lg:w-1/3 relative bg-black group">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"
          className="group-hover:opacity-80 duration-300"
        />
        <button className="absolute top-2 right-2 h-8 w-8 bg-gray-900/30 rounded-full hidden group-hover:grid place-items-center">
          <BookmarkIcon color="text-yellow-300 hover:text-yellow-400" size="h-4 w-4" />
        </button>
      </div>
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-3/5 md:w-1/2 lg:w-2/3 px-4 lg:px-6 text-justify xs:border-t border-gray-300 flex flex-col lg:justify-center">
        <p className="font-extrabold uppercase text-xs lg:text-sm xs:mt-4 lg:mt-2 mb-1 lg:mb-0">
          Programming{" "}
          <span className="font-medium lowercase">/ 2 years ago</span>
        </p>
        <h2 className="oswald font-extrabold xs:text-2xl lg:text-3xl text-gray-800 group-hover:text-gray-600 duration-200">
          Emily Ratajkowski channels back-to-school style back-to-school style
        </h2>
        <p className="mt-3 text-gray-500 hidden lg:block">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </p>
      </div>
    </a>
  );
}
