import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="px-10">
      <header className="flex items-center ring relative">
        <div className="ring absolute left-0 top-0 h-full flex items-center justify-center">
          menu
        </div>
        <nav className="mx-auto">
          <ul className="flex items-center ring space-x-10">
            {navs.map((nav, i) => (
              <li key={i}>
                <Link href={nav.link}>
                  <a className="font-bold text-2xl py-2 block">{nav.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ring absolute right-0 top-0 h-full flex items-center justify-center">
          <input placeholder="search" className="border" />
          <button>search</button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

const navs = [
  {
    text: "indonesia",
    link: "/",
  },
  {
    text: "programming",
    link: "/programming",
  },
  {
    text: "covid19",
    link: "/covid19",
  },
  {
    text: "saved",
    link: "/saved",
  },
];
