import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";

export default function Programming() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold text-center">news</h1>
        <div className="grid grid-cols-4 gap-6">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((e, i) => (
            <NewsCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
