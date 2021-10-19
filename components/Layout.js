import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="text-gray-700 roboto bg-blue-100">
      <Header />
      <main className="w-11/12 mx-auto">{children}</main>
    </div>
  );
}
