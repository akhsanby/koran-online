// components
import Layout from "../../src/components/Layout";
import NewsCardXl from "../../src/components/NewsCardXl";

// api
import { fetchNewsByKeyword } from "../../src/utils";

export default function Search({ newsByKeyword }) {
  return (
    <Layout title="News | Search Result">
      <div className="mt-7 space-y-6">
        {newsByKeyword?.articles?.map((news, index) => (
          <NewsCardXl key={index} news={news} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchNewsByKeyword(context.query.keyword);

  return {
    props: {
      newsByKeyword: data,
    },
  };
}
