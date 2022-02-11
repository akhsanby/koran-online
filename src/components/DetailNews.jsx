import Image from "next/image";
import { FacebookIcon, MailIcon, PinterestIcon, TwitterIcon, WhatsappIcon } from "./icon";

// utils
import { formatDate } from "../utils";

// redux
import { useSelector } from "react-redux";

export default function DetailNews() {
  const detailNews = useSelector((state) => state.news.data?.detailNews);

  return (
    <>
      <h5 className="my-5">
        <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold inline-block">{detailNews?.source?.name}</span>
      </h5>
      <h1 className="oswald font-bold text-3xl xs:text-5xl text-gray-900">{detailNews?.title}</h1>
      <p className="text-lg font-semibold text-gray-500 my-5">{detailNews?.description}</p>
      <div className="flex items-center space-x-3">
        <div className="rounded-full h-16 w-16 border-2 bg-yellow-400" />
        <div className="text-sm font-semibold text-gray-500">
          <p>Published - {formatDate(detailNews?.publishedAt)}</p>
          <p>
            By <b className="text-gray-900 font-bold">{detailNews?.author}</b>
          </p>
        </div>
      </div>
      <div className="h-[350px] sm:h-[492px] w-full my-5 relative">
        <Image alt="random-pic" layout="fill" objectFit="cover" src={`/api/imageproxy?url=${encodeURIComponent(detailNews?.urlToImage)}` || null} />
      </div>
      <div className="xs:flex space-x-3 my-5">
        <div className="flex-1">
          <div className="flex xs:flex-col items-center justify-center space-x-3 xs:space-x-0 xs:space-y-3 xs:sticky top-20">
            {socialMedias.map((e, i) => (
              <a href="#" key={i} className={`${e.color} rounded-full h-12 w-12 text-white grid place-items-center`}>
                {e.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-[9] mt-3 xs:mt-0">
          <p className="text-gray-700 font-semibold text-lg whitespace-pre-wrap">{detailNews?.content + "\n\n" + paragraph}</p>
        </div>
      </div>
    </>
  );
}

const paragraph = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n\nHeading 1\n\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.\n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const socialMedias = [
  {
    name: "facebook",
    icon: <FacebookIcon />,
    color: "bg-[#3b5998]",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    color: "bg-[#00acee]",
  },
  {
    name: "pinterest",
    icon: <PinterestIcon />,
    color: "bg-[#c8232c]",
  },
  {
    name: "mail",
    icon: <MailIcon />,
    color: "bg-gray-400",
  },
  {
    name: "whatsapp",
    icon: <WhatsappIcon />,
    color: "bg-[#075E54]",
  },
];
