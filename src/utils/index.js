// redux
import { saveThisNews, addDetailNewsOnClick } from '../features/news-slice';

export function getNewsDataFromState(useSelector, router) {
  return useSelector((state) => {
    if (router.pathname === '/' || router.pathname === '/indonesia/[detail]') return state.news.data?.indonesia;
    if (router.pathname === '/programming' || router.pathname === '/programming/[detail]') return state.news.data?.programming;
    if (router.pathname === '/covid19' || router.pathname === '/covid19/[detail]') return state.news.data?.covid19;
    if (router.pathname === '/entertainment' || router.pathname === '/entertainment/[detail]') return state.news.data?.entertainment;
    if (router.pathname === '/sports' || router.pathname === '/sports/[detail]') return state.news.data?.covid19;
    if (router.pathname === '/technology' || router.pathname === '/technology/[detail]') return state.news.data?.technology;
    if (router.pathname === '/search' && router.query.keyword || router.pathname === '/search/[detail]') return state.news.data?.indonesia;
    if (router.pathname === '/saved') return state.news.data?.indonesia;
  });
}

export function formatDate(value) {
  const date = (value === undefined) ? null : new Date(value);
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date);
}

export const handleRedirectToDetailNews = (dispatch, router, article) => {
  dispatch(addDetailNewsOnClick(article));
  if (router.pathname === '/') router.push(`/indonesia/${article.title}`);
  if (router.pathname === '/programming') router.push(`/programming/${article.title}`);
  if (router.pathname === '/covid19') router.push(`/covid19/${article.title}`);
  if (router.pathname === '/entertainment') router.push(`/entertainment/${article.title}`);
  if (router.pathname === '/sports') router.push(`/sports/${article.title}`);
  if (router.pathname === '/technology') router.push(`/technology/${article.title}`);
  if (router.pathname === '/search' && router.query.keyword) router.push(`/search/${article.title}`);
};

export const handleBookmarkAndUnBookmark = (dispatch, article) => dispatch(saveThisNews({ article }));

export const setNewsTitlePage = (router) => {
  if (router.pathname === '/') return 'News | Indonesia'
  if (router.pathname === '/indonesia/[detail]') return 'Detail News | Indonesia'
  if (router.pathname === '/programming') return 'News | Programming'
  if (router.pathname === '/programming/[detail]') return 'Detail News | Programming'
  if (router.pathname === '/covid19') return 'News | Covid 19'
  if (router.pathname === '/covid19/[detail]') return 'Detail News | Covid 19'
  if (router.pathname === '/entertainment') return 'News | Entertainment'
  if (router.pathname === '/entertainment/[detail]') return 'Detail News | Entertainment'
  if (router.pathname === '/sports') return 'News | Sports'
  if (router.pathname === '/sports/[detail]') return 'Detail News | Sports'
  if (router.pathname === '/technology') return 'News | Technology'
  if (router.pathname === '/technology/[detail]') return 'Detail News | Technology'
  if (router.pathname === '/search' && router.query.keyword) return 'Search Page'
  if (router.pathname === '/saved') return 'Saved News Page'
}