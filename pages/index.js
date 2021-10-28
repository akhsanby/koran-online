import Layout from "../components/Layout";
import NewsCardLg from "../components/NewsCardLg";
import NewsCardXl from "../components/NewsCardXl";
import NewsCard2xl from "../components/NewsCard2xl";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row sm:space-x-4 md:space-x-0 lg:space-x-6">
        <div className="sm:w-1/3 md:w-auto lg:flex-1 relative mt-5 lg:mt-0">
          <h5 className="flex justify-center absolute top-0 w-full">
            <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">
              Programming
            </span>
          </h5>
          <div className="flex sm:flex-col md:flex-row lg:flex-col border-t border-black mt-3 pt-7 space-x-2 sm:space-x-0 sm:space-y-6 md:space-y-0 lg:space-y-7 md:space-x-5 lg:space-x-0">
            {[1, 2].map((el) => (
              <NewsCardLg key={el} />
            ))}
          </div>
        </div>
        <div className="sm:w-2/3 md:w-auto lg:flex-[2]">
          <NewsCard2xl />
        </div>
      </div>
      <div className="mt-7 space-y-6">
        {[1, 2, 3, 4, 5].map((el) => (
          <NewsCardXl key={el} />
        ))}
      </div>
    </Layout>
  );
}
