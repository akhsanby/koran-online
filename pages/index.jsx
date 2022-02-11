import { useEffect } from "react";

// components
import Layout from "../src/components/Layout";
import MainContent from "../src/components/MainContent";

// api
import { fetchNewsIndonesia } from "../src/utils";

// redux
import { useDispatch } from "react-redux";
import { addNewsIndonesia } from "../src/features/news-slice";

export default function Home({ newsIndonesia }) {
  const dispatch = useDispatch();
  dispatch(addNewsIndonesia(newsIndonesia));

  return (
    <Layout title="News | Indonesia">
      <MainContent category="Indonesia" />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchNewsIndonesia();

  return {
    props: {
      newsIndonesia: data,
    },
    revalidate: 86400, // 1 day
  };
}
