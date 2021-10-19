import Image from "next/image";

export default function NewsCardLg() {
  return (
    <a href="#" className="group block">
      <div className="relative bg-black h-[155px]">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane.jpg"
          className="group-hover:opacity-80 duration-300"
        />
      </div>
      <p className="font-extrabold uppercase text-sm mt-2">
        Programming <span className="font-medium lowercase">/ 2 years ago</span>
      </p>
      <h4 className="oswald font-extrabold text-2xl text-gray-800 group-hover:text-gray-500">
        Emily Ratajkowski channels back-to-school style
      </h4>
    </a>
  );
}
