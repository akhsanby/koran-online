import { useState } from "react";
import NewsCardSm from "./NewsCardSm";

export default function HotNews() {
  const [activeTab, setActiveTab] = useState("latest");
  return (
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
          <NewsCardSm key={el} />
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
