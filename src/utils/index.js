// redux
import { fetchNewsDataFromAPI } from "../features/news-slice";

// api url
export const apiUrl = {
  indonesia: `${process.env.BASE_URL}/top-headlines?country=id&apiKey=${process.env.API_KEY}`,
  programming: `${process.env.BASE_URL}/everything?q=programming&apiKey=${process.env.API_KEY}`,
  covid19: `${process.env.BASE_URL}/everything?q=covid19&apiKey=${process.env.API_KEY}`,
  entertainment: `${process.env.BASE_URL}/top-headlines?country=id&category=entertainment&apiKey=${process.env.API_KEY}`,
  sports: `${process.env.BASE_URL}/top-headlines?country=id&category=sports&apiKey=${process.env.API_KEY}`,
  technology: `${process.env.BASE_URL}/top-headlines?country=id&category=technology&apiKey=${process.env.API_KEY}`,
  byKeyword: `${process.env.BASE_URL}/everything?apiKey=${process.env.API_KEY}`,
};

// redux
import { saveThisNews, addDetailNewsOnClick } from "../features/news-slice";

export function getNewsDataFromState(useSelector, categoryName) {
  return useSelector((state) => {
    if (categoryName === "Programming") return state.news.data?.programming;
    if (categoryName === "Covid 19") return state.news.data?.covid19;
    if (categoryName === "Entertainment") return state.news.data?.entertainment;
    if (categoryName === "Sports") return state.news.data?.covid19;
    if (categoryName === "Technology") return state.news.data?.technology;
    return state.news.data?.indonesia;
  });
}

export const fetchNewsFromApiByCategory = (dispatch, category, apiUrl) => {
  if (category === "Indonesia")
    dispatch(
      fetchNewsDataFromAPI({ category: "Indonesia", url: apiUrl.indonesia })
    );
  if (category === "Programming")
    dispatch(
      fetchNewsDataFromAPI({
        category: "Programming",
        url: apiUrl.programming,
      })
    );
  if (category === "Covid 19")
    dispatch(
      fetchNewsDataFromAPI({ category: "Covid 19", url: apiUrl.covid19 })
    );
  if (category === "Entertainment")
    dispatch(
      fetchNewsDataFromAPI({
        category: "Entertainment",
        url: apiUrl.entertainment,
      })
    );
  if (category === "Sports")
    dispatch(fetchNewsDataFromAPI({ category: "Sports", url: apiUrl.sports }));
  if (category === "Technology")
    dispatch(
      fetchNewsDataFromAPI({
        category: "Technology",
        url: apiUrl.technology,
      })
    );
};

export function formatDate(value) {
  const date = value === undefined ? null : new Date(value);
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
}

export const handleRedirectToDetailNews = (dispatch, router, article) => {
  dispatch(addDetailNewsOnClick(article));
  if (router.pathname === "/") router.push(`/indonesia/${article.title}`);
  if (router.pathname === "/programming")
    router.push(`/programming/${article.title}`);
  if (router.pathname === "/covid19") router.push(`/covid19/${article.title}`);
  if (router.pathname === "/entertainment")
    router.push(`/entertainment/${article.title}`);
  if (router.pathname === "/sports") router.push(`/sports/${article.title}`);
  if (router.pathname === "/technology")
    router.push(`/technology/${article.title}`);
  if (router.pathname === "/search" && query.keyword)
    router.push(`/search/${article.title}`);
};

export const handleBookmarkAndUnBookmark = (dispatch, article) =>
  dispatch(saveThisNews({ article }));
