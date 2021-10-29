import Layout from "../components/Layout";

export default function Saved() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold oswald border-green-300 border-b-4 py-4 uppercase text-gray-800">
        saved
      </h1>
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                <tr key={el} className="odd:bg-gray-100">
                  <td className="p-3 w-[14rem] ">
                    asdsdadasdasdds asdasd asdas asdsa asdasd
                  </td>
                  <td className="p-3 w-[14rem] ">
                    asdsdadasdasdds asdasd asdas asdsa asdasd
                  </td>
                  <td className="p-3">
                    asdsdadasdasdds asdasd asdas asdsa asdasd
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
