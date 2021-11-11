import { useState } from 'react';
import { useRouter } from 'next/router';

// components
import { useSelector } from 'react-redux';
import NewsCardSm from './NewsCardSm';

// utils
import { getNewsDataFromState } from '../utils';

export default function HotNews() {
  const [activeTab, setActiveTab] = useState('latest');
  const router = useRouter();

  const newsData = getNewsDataFromState(useSelector, router);

  const activeTabData = () => {
    if (activeTab === 'latest') return newsData?.articles?.slice(10, 13);
    if (activeTab === 'trending') return newsData?.articles?.slice(13, 16);
    if (activeTab === 'popular') return newsData?.articles?.slice(16, 19);
  };

  return (
    <div className="sticky top-16">
      <div className="flex justify-center space-x-px">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab.text)}
            className={`${
              tab.text === activeTab
                ? 'bg-[#FF005B] text-white'
                : 'bg-transparent text-gray-400 hover:text-gray-800'
            } oswald rounded-none uppercase text-lg px-3 skew-x-[-15deg] font-extrabold`}
          >
            {tab.text}
          </button>
        ))}
      </div>
      <div className="w-full space-y-4 mt-4">
        {activeTabData()?.map((article, index) => (
          <NewsCardSm key={index} article={article} router={router} />
        ))}
      </div>
    </div>
  );
}

const tabs = [
  {
    text: 'latest',
  },
  {
    text: 'trending',
  },
  {
    text: 'popular',
  },
];
