import { useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout';
import NewsCardLg from './NewsCardLg';
import NewsCardXl from './NewsCardXl';
import NewsCard2xl from './NewsCard2xl';

// redux
import {
  fetchNewsIndonesia,
  fetchNewsProgramming,
  fetchNewsCovid19,
  fetchNewsEntertainment,
  fetchNewsSports,
  fetchNewsTechnology,
} from '../features/news-slice';

// utils
import { getNewsDataFromState } from '../utils';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const newsData = getNewsDataFromState(useSelector, router);

  const fetchNewsFromApiByPathname = () => {
    if (router.pathname === '/') dispatch(fetchNewsIndonesia());
    if (router.pathname === '/programming') dispatch(fetchNewsProgramming());
    if (router.pathname === '/covid19') dispatch(fetchNewsCovid19());
    if (router.pathname === '/entertainment') dispatch(fetchNewsEntertainment());
    if (router.pathname === '/sports') dispatch(fetchNewsSports());
    if (router.pathname === '/technology') dispatch(fetchNewsTechnology());
  };

  useEffect(() => {
    fetchNewsFromApiByPathname();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row sm:space-x-4 md:space-x-0 lg:space-x-6">
        <div className="sm:w-1/3 md:w-auto lg:flex-1 relative mt-5 lg:mt-0">
          <h5 className="flex justify-center absolute top-0 w-full">
            <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">
              <UseNewsCategoryName router={router}/>
            </span>
          </h5>
          <div className="flex sm:flex-col md:flex-row lg:flex-col border-t border-black mt-3 pt-7 space-x-2 sm:space-x-0 sm:space-y-6 md:space-y-0 lg:space-y-7 md:space-x-5 lg:space-x-0">
            {newsData?.articles?.slice(1, 3).map((article, index) => (
              <NewsCardLg key={index} article={article} router={router} />
            ))}
          </div>
        </div>
        <div className="sm:w-2/3 md:w-auto lg:flex-[2]">
          <NewsCard2xl oneArticle={newsData?.articles?.[0]} router={router} />
        </div>
      </div>
      <div className="mt-7 space-y-6">
        {newsData?.articles?.slice(4, 9).map((article, index) => (
          <NewsCardXl key={index} article={article} router={router} />
        ))}
      </div>
    </Layout>
  );
}

const UseNewsCategoryName = ({ router }) => {
  if (router.pathname === '/' || router.pathname === '/indonesia/[detail]') return 'Indonesia';
  if (router.pathname === '/programming' || router.pathname === '/programming/[detail]') return 'Programming';
  if (router.pathname === '/covid19' || router.pathname === '/covid19/[detail]') return 'Covid 19';
  if (router.pathname === '/entertainment' || router.pathname === '/entertainment/[detail]') return 'Entertainment';
  if (router.pathname === '/sports' || router.pathname === '/sports/[detail]') return 'Sports';
  if (router.pathname === '/technology' || router.pathname === '/technology/[detail]') return 'Technology';
};