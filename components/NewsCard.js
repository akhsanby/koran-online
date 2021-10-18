export default function NewsCard() {
  return (
    <div className="w-full h-[27rem] ring">
      <p>sumber.com</p>
      <h4 className="font-bold text-2xl my-2">
        In publishing and graphic design, Lorem ipsum is a placeholder
      </h4>
      <p className="text-lg font-semibold">penulis</p>
      <p className="my-5">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <div className="space-x-4">
        <button className="ring px-3">news page</button>
        <button className="ring px-3">save</button>
      </div>
    </div>
  );
}
