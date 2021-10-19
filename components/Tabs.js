import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("latest");
  return (
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
