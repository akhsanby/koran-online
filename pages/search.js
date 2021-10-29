import Layout from "../components/Layout";
import NewsCardXl from "../components/NewsCardXl";

export default function Search() {
  return (
    <Layout>
      <div className="mt-7 space-y-6">
        {[1, 2, 3, 4, 5].map((el) => (
          <NewsCardXl key={el} />
        ))}
      </div>
    </Layout>
  );
}
