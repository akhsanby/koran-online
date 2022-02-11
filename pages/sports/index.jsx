// componenets
import Layout from "../../src/components/Layout";
import MainContent from "../../src/components/MainContent";

// api
import { fetchNewsSports } from "../../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsSports } from "../../src/features/news-slice";

export default function Sports({ newsSports }) {
  const dispatch = useDispatch();
  dispatch(addNewsSports(newsSports));

  return (
    <Layout title="News | Sports">
      <MainContent category="Sports" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsSports();

  return {
    props: {
      newsSports: data,
    },
    revalidate: 86400, // 1 day
  };
}
