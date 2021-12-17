import NextNProgress from "nextjs-progressbar";
import "tailwindcss/tailwind.css";
import "../style/global.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../src/features/news-slice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
