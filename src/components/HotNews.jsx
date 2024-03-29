import { useState } from "react";
import { useRouter } from "next/router";

// components
import NewsCardSm from "./NewsCardSm";

// redux
import { useSelector } from "react-redux";

export default function HotNews() {
  const [activeTab, setActiveTab] = useState("latest");
  const router = useRouter();

  const newsData = useSelector((state) => {
    if (router.pathname === "/") return state.news.data.indonesia;
    if (router.pathname === "/programming") return state.news.data.programming;
    if (router.pathname === "/covid19") return state.news.data.covid19;
    if (router.pathname === "/entertainment") return state.news.data.entertainment;
    if (router.pathname === "/sports") return state.news.data.sports;
    if (router.pathname === "/technology") return state.news.data.technology;
    return state.news.data.indonesia;
  });

  const activeTabData = () => {
    if (activeTab === "latest") return newsData.articles?.slice(10, 13);
    if (activeTab === "trending") return newsData.articles?.slice(13, 16);
    if (activeTab === "popular") return newsData.articles?.slice(16, 19);
  };

  return (
    <div className="sticky top-16">
      <div className="flex justify-center space-x-px">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(tab.text)} className={`${tab.text === activeTab ? "bg-[#FF005B] text-white" : "bg-transparent text-gray-400 hover:text-gray-800"} oswald rounded-none uppercase text-lg px-3 skew-x-[-15deg] font-extrabold`}>
            {tab.text}
          </button>
        ))}
      </div>
      <div className="w-full space-y-4 mt-4">
        {activeTabData()?.map((news, index) => (
          <NewsCardSm key={index} news={news} />
        ))}
      </div>
    </div>
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
