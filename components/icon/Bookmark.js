export default function Bookmark({ color, size }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bookmark"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={`${size} ${color}`}
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      ></path>
    </svg>
  );
}

Bookmark.defaultProps = {
  color: "text-gray-400",
  size: "h-5 w-5",
};
