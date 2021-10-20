import Image from "next/image";
import {
  FacebookIcon,
  MailIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../components/icon";
import Layout from "../components/Layout";

export default function NewsDetail() {
  return (
    <Layout>
      <h5 className="my-5">
        <span className="oswald uppercase text-lg px-3 bg-[#FF005B] text-white skew-x-[-15deg] font-extrabold inline-block">
          Programming
        </span>
      </h5>
      <h1 className="oswald font-bold text-6xl text-gray-900">
        Illinois’ financial crisis could bring the state to a halt
      </h1>
      <p className="text-lg font-semibold text-gray-500 my-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti.
      </p>
      <div className="flex items-center space-x-3">
        <div className="rounded-full h-16 w-16 border-2 bg-yellow-400"></div>
        <div className="text-sm font-semibold text-gray-500">
          <p>Published 2 years ago on October 20, 2019</p>
          <p>
            By <b className="text-gray-900 font-bold">Alfirman Ejha Pahlepi</b>
          </p>
        </div>
      </div>
      <div className="h-[492px] w-full my-5 relative">
        <Image
          alt="random-pic"
          layout="fill"
          objectFit="cover"
          src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset.jpg"
        />
      </div>
      <div className="flex space-x-3 my-5">
        <div className="flex-1">
          <div className="flex flex-col items-center space-y-3 sticky top-20">
            {socialMedias.map((e, i) => (
              <a
                href="#"
                key={i}
                className={`${e.color} rounded-full h-12 w-12 text-white grid place-items-center`}
              >
                {e.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-[9]">
          <p className="text-gray-700 font-semibold text-lg whitespace-pre-wrap">
            {paragraph}
          </p>
        </div>
      </div>
    </Layout>
  );
}

const paragraph =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n\nHeading 1\n\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.\n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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