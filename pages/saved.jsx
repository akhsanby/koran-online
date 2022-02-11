// components
import Layout from "../src/components/Layout";

// redux
import { useSelector } from "react-redux";

export default function Saved() {
  const savedNews = useSelector((state) => state.news.data.saved);

  return (
    <Layout title="Saved News">
      <h1 className="text-3xl font-bold oswald border-green-300 border-b-4 py-4 uppercase text-gray-800">saved</h1>
      {savedNews.length > 0 ? (
        <div className="overflow-auto">
          <div className="w-[640px] sm:w-full">
            <table className="w-full mt-4">
              <thead className="text-left font-bold oswald text-2xl tracking-wide">
                <tr className="border-b-2 border-gray-600">
                  <th className="p-3 w-[14rem]">Source</th>
                  <th className="p-3 w-[14rem]">Title</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {savedNews.map((news, index) => (
                  <tr key={index} className="odd:bg-gray-100">
                    <td className="p-3 w-[14rem]">
                      <div>
                        {news.source?.name} - {news.author}
                      </div>
                      <a className="no-underline hover:underline" href={news.url}>
                        News Page
                      </a>
                    </td>
                    <td className="p-3 w-[14rem] ">{news.title}</td>
                    <td className="p-3">{news.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h3 className="mt-4 text-left font-bold oswald text-2xl">No saved news</h3>
      )}
    </Layout>
  );
}
