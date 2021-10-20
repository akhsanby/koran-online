import Layout from "../components/Layout";
import NewsCardLg from "../components/NewsCardLg";
import NewsCardXl from "../components/NewsCardXl";
import NewsCard2xl from "../components/NewsCard2xl";

export default function Home() {
  return (
    <Layout>
      <div className="flex space-x-6">
        <div className="flex-1 relative">
          <h5 className="flex justify-center absolute top-0 w-full">
            <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">
              Programming
            </span>
          </h5>
          <div className="border-t border-black mt-3 pt-7 space-y-7">
            {[1, 2].map((el) => (
              <NewsCardLg key={el} />
            ))}
          </div>
        </div>
        <NewsCard2xl />
      </div>
      <div className="mt-7 space-y-6">
        {[1, 2, 3, 4, 5].map((el) => (
          <NewsCardXl key={el} />
        ))}
      </div>
    </Layout>
  );
}
