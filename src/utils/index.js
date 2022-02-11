import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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

export function formatDate(value) {
  const date = value === undefined ? null : new Date(value);
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
}

export async function fetchNewsIndonesia() {
  const response = await fetch(apiUrl.indonesia).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsProgramming() {
  const response = await fetch(apiUrl.programming).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsCovid19() {
  const response = await fetch(apiUrl.covid19).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsEntertainment() {
  const response = await fetch(apiUrl.entertainment).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsSports() {
  const response = await fetch(apiUrl.sports).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsTechnology() {
  const response = await fetch(apiUrl.technology).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export async function fetchNewsByKeyword(keyword) {
  const response = await fetch(apiUrl.byKeyword.concat(`&q=${keyword}`)).catch((error) => console.log("Error :" + error));
  return await response.json();
}

export const isNewsSaved = (news) => {
  const savedNews = useSelector((state) => state.news.data.saved);
  return savedNews.some((item) => item.title === news.title);
};

export const href = (news) => {
  const router = useRouter();
  if (router.pathname === "/") return `/indonesia/${news?.title}`;
  if (router.pathname === "/programming") return `/programming/${news?.title}`;
  if (router.pathname === "/covid19") return `/covid19/${news?.title}`;
  if (router.pathname === "/entertainment") return `/entertainment/${news?.title}`;
  if (router.pathname === "/sports") return `/sports/${news?.title}`;
  if (router.pathname === "/technology") return `/technology/${news?.title}`;
};
