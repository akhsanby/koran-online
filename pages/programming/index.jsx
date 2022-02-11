// componenets
import Layout from "../../src/components/Layout";
import MainContent from "../../src/components/MainContent";

// api
import { fetchNewsProgramming } from "../../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsProgramming } from "../../src/features/news-slice";

export default function Programming({ newsProgramming }) {
  const dispatch = useDispatch();
  dispatch(addNewsProgramming(newsProgramming));

  return (
    <Layout title="News | Programming">
      <MainContent category="Programming" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsProgramming();

  return {
    props: {
      newsProgramming: data,
    },
    revalidate: 86400, // 1 day
  };
}
