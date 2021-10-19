import Image from "next/image";

export default function NewsCardSm() {
  return (
    <a href="#" className="flex space-x-3 group">
      <div className="h-24 w-24 relative bg-black">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"
          className="group-hover:opacity-80 duration-300"
        />
      </div>
      <div className="w-[calc(100%-6rem)]">
        <p className="font-extrabold uppercase text-sm mt-2">
          Programming{" "}
          <span className="font-medium lowercase">/ 2 years ago</span>
        </p>
        <h5 className="oswald font-extrabold text-gray-800">
          Emily Ratajkowski channels badsadasdasdasasdsada
        </h5>
      </div>
    </a>
  );
}
