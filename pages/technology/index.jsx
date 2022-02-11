// componenets
import Layout from "../../src/components/Layout";
import MainContent from "../../src/components/MainContent";

// api
import { fetchNewsTechnology } from "../../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsTechnology } from "../../src/features/news-slice";

export default function Technology({ newsTechnology }) {
  const dispatch = useDispatch();
  dispatch(addNewsTechnology(newsTechnology));

  return (
    <Layout title="News | Technology">
      <MainContent category="Technology" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsTechnology();

  return {
    props: {
      newsTechnology: data,
    },
    revalidate: 86400, // 1 day
  };
}
