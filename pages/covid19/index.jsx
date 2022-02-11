// componenets
import Layout from "../../src/components/Layout";
import MainContent from "../../src/components/MainContent";

// api
import { fetchNewsCovid19 } from "../../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsCovid19 } from "../../src/features/news-slice";

export default function Covid19({ newsCovid19 }) {
  const dispatch = useDispatch();
  dispatch(addNewsCovid19(newsCovid19));

  return (
    <Layout title="News | Covid 19">
      <MainContent category="Covid 19" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsCovid19();

  return {
    props: {
      newsCovid19: data,
    },
    revalidate: 86400, // 1 day
  };
}
