import Layout from "../src/components/Layout";
import MainContent from "../src/components/MainContent";

export default function Home() {
  return (
    <Layout title="News | Indonesia">
      <MainContent categoryName="Indonesia" />
    </Layout>
  );
}
