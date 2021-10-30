import Layout from "../src/components/Layout";
import NewsCardXl from "../src/components/NewsCardXl";

import { useRouter } from 'next/router'

// redux
import { useSelector } from 'react-redux'

export default function Search() {
  const router = useRouter()
  const searchResult = useSelector(state => state.news.data.searchResult)

  return (
    <Layout>
      <div className="mt-7 space-y-6">
        {searchResult.articles?.map((article, index) => (
          <NewsCardXl key={index} article={article} router={router}/>
        ))}
      </div>
    </Layout>
  );
}