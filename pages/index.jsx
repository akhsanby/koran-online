import { useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Layout from "../src/components/Layout";
import NewsCardLg from "../src/components/NewsCardLg";
import NewsCardXl from "../src/components/NewsCardXl";
import NewsCard2xl from "../src/components/NewsCard2xl";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsIndonesia, fetchNewsProgramming, fetchNewsCovid19 } from '../src/features/news-slice'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()

  const newsData = useSelector((state) => {
    if(router.pathname == '/') return state.news.data?.indonesia
    if(router.pathname == '/programming') return state.news.data?.programming
    if(router.pathname == '/covid19') return state.news.data?.covid19
  })

  const newsTagName = () => {
    if(router.pathname == '/') return 'Indonesia'
    if(router.pathname == '/programming') return 'Programming'
    if(router.pathname == '/covid19') return 'Covid 19'
  }

  useEffect(() => {  
    if(router.pathname == '/') return dispatch(fetchNewsIndonesia())
    if(router.pathname == '/programming') return dispatch(fetchNewsProgramming())
    if(router.pathname == '/covid19') return dispatch(fetchNewsCovid19())
  }, [])

  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row sm:space-x-4 md:space-x-0 lg:space-x-6">
        <div className="sm:w-1/3 md:w-auto lg:flex-1 relative mt-5 lg:mt-0">
          <h5 className="flex justify-center absolute top-0 w-full">
            <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">
              {newsTagName()}
            </span>
          </h5>
          <div className="flex sm:flex-col md:flex-row lg:flex-col border-t border-black mt-3 pt-7 space-x-2 sm:space-x-0 sm:space-y-6 md:space-y-0 lg:space-y-7 md:space-x-5 lg:space-x-0">
            {newsData.articles?.slice(1, 3).map((article, index) => (
              <NewsCardLg key={index} article={article} router={router}/>
            ))}
          </div>
        </div>
        <div className="sm:w-2/3 md:w-auto lg:flex-[2]">
          <NewsCard2xl oneArticle={newsData.articles?.[0]} router={router}/>
        </div>
      </div>
      <div className="mt-7 space-y-6">
        {newsData.articles?.slice(4, 9).map((article, index) => (
          <NewsCardXl key={index} article={article} router={router}/>
        ))}
      </div>
    </Layout>
  );
}
