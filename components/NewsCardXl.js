import Image from "next/image";

export default function NewsCardXl() {
  return (
    <a href="#" className="flex group">
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-2/5 md:w-1/2 relative bg-black">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"
          className="group-hover:opacity-80 duration-300"
        />
      </div>
      <div className="h-[120px] xs:h-[180px] lg:h-[229px] w-3/5 md:w-1/2 px-4 lg:px-6 text-justify xs:border-t border-gray-300 flex flex-col lg:justify-center">
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
