// components
import NewsCardLg from "./NewsCardLg";
import NewsCardXl from "./NewsCardXl";
import NewsCard2xl from "./NewsCard2xl";

// redux
import { useSelector } from "react-redux";

export default function MainContent({ category }) {
  const newsData = useSelector((state) => {
    if (category === "Indonesia") return state.news.data.indonesia;
    if (category === "Programming") return state.news.data.programming;
    if (category === "Covid 19") return state.news.data.covid19;
    if (category === "Entertainment") return state.news.data.entertainment;
    if (category === "Sports") return state.news.data.sports;
    if (category === "Technology") return state.news.data.technology;
  });

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row sm:space-x-4 md:space-x-0 lg:space-x-6">
        <div className="sm:w-1/3 md:w-auto lg:flex-1 relative mt-5 lg:mt-0">
          <h5 className="flex justify-center absolute top-0 w-full">
            <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">{category}</span>
          </h5>
          <div className="flex sm:flex-col md:flex-row lg:flex-col border-t border-black mt-3 pt-7 space-x-2 sm:space-x-0 sm:space-y-6 md:space-y-0 lg:space-y-7 md:space-x-5 lg:space-x-0">
            {newsData.articles?.slice(1, 3).map((news, index) => (
              <NewsCardLg key={index} news={news} />
            ))}
          </div>
        </div>
        <div className="sm:w-2/3 md:w-auto lg:flex-[2]">
          <NewsCard2xl news={newsData.articles?.[0]} />
        </div>
      </div>
      <div className="mt-7 space-y-6">
        {newsData.articles?.slice(4, 9).map((news, index) => (
          <NewsCardXl key={index} news={news} />
        ))}
      </div>
    </>
  );
}
