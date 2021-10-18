import Layout from "../components/Layout";

export default function Saved() {
  return (
    <Layout>
      <div className="ring grid grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map((el) => (
          <div key={el} className="ring">
            <div>source</div>
            <div>title</div>
            <div>description</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
