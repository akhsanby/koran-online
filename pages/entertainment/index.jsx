// componenets
import Layout from "../../src/components/Layout";
import MainContent from "../../src/components/MainContent";

// api
import { fetchNewsEntertainment } from "../../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsEntertainment } from "../../src/features/news-slice";

export default function Entertainment({ newsEntertainment }) {
  const dispatch = useDispatch();
  dispatch(addNewsEntertainment(newsEntertainment));

  return (
    <Layout title="News | Entertainment">
      <MainContent category="Entertainment" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsEntertainment();

  return {
    props: {
      newsEntertainment: data,
    },
    revalidate: 86400, // 1 day
  };
}
