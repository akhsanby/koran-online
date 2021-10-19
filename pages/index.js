import { useState } from "react";
import Layout from "../components/Layout";
// import NewsCard from "../components/NewsCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("latest");
  return (
    <Layout>
      <div className=" flex space-x-6 h-[200vh]">
        <div className="flex-[3]">
          <div className="flex space-x-6">
            <div className="flex-1 relative">
              <h5 className="flex justify-center absolute top-0 w-full">
                <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold">
                  Programming
                </span>
              </h5>
              <div className="border-t border-black mt-3 pt-7 space-y-7">
                {[1, 2].map((el) => (
                  <div key={el}>
                    <div className="bg-red-500 h-[155px]"></div>
                    <p className="font-extrabold uppercase text-sm mt-2">
                      Programming{" "}
                      <span className="font-medium lowercase">
                        / 2 years ago
                      </span>
                    </p>
                    <h4 className="oswald font-extrabold text-2xl text-gray-800">
                      Emily Ratajkowski channels back-to-school style
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[2] bg-purple-700 h-[600px]">hero img</div>
          </div>
          <div className="ring">asd</div>
        </div>
        <div className="flex-1 mt-10 ring">
          <div className="sticky top-16">
            <div className="flex justify-center space-x-px">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab.text)}
                  className={`${
                    tab.text === activeTab
                      ? "bg-[#FF005B] text-white"
                      : "bg-transparent text-gray-400 hover:text-gray-800"
                  } oswald rounded-none uppercase text-lg px-3 skew-x-[-15deg] font-extrabold`}
                >
                  {tab.text}
                </button>
              ))}
            </div>
            <div className="w-full space-y-4 mt-4">
              {[1, 2, 3].map((el) => (
                <div key={el} className="flex space-x-3">
                  <div className="h-24 w-24 flex-grow-0 bg-green-600"></div>
                  <div className="w-[calc(100%-6rem)]">
                    <p className="font-extrabold uppercase text-sm mt-2">
                      Programming{" "}
                      <span className="font-medium lowercase">
                        / 2 years ago
                      </span>
                    </p>
                    <h5 className="oswald font-extrabold text-gray-800">
                      Emily Ratajkowski channels badsadasdasdasasdsada
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const tabs = [
  {
    text: "latest",
  },
  {
    text: "trending",
  },
  {
    text: "popular",
  },
];
