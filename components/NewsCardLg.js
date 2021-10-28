import Image from "next/image";
import { BookmarkIcon } from "./icon";

export default function NewsCardLg() {
  return (
    <a href="#" className="group block">
      <div className="relative bg-black h-[120px] xs:h-[155px]">
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
      <p className="font-extrabold uppercase text-xs lg:text-sm mt-2 mb-1 lg:mb-0">
        Programming <span className="font-medium lowercase">/ 2 years ago</span>
      </p>
      <h4 className="oswald font-extrabold xs:text-xl lg:text-2xl text-gray-800 group-hover:text-gray-500">
        Emily Ratajkowski channels back-to-school style
      </h4>
    </a>
  );
}
