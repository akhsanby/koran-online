// redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    indonesia: {},
    programming: {},
    covid19: {},
    entertainment: {},
    sports: {},
    technology: {},
    saved: [],
    searchResult: {},
    detailNews: {},
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveThisNews: (state, action) => {
      const findSavedNews = state.data.saved.find((item) => item.title === action.payload.title);
      if (findSavedNews) {
        const filtered = state.data.saved.filter((item) => item.title !== findSavedNews.title);
        state.data.saved = filtered;
      } else {
        state.data.saved.push(action.payload);
      }
    },
    removeLastNewsData: (state) => {
      state.data.searchResult = {};
    },
    addDetailNews: (state, action) => {
      state.data.detailNews = action.payload;
    },
    addNewsIndonesia: (state, action) => {
      state.data.indonesia = action.payload;
    },
    addNewsProgramming: (state, action) => {
      state.data.programming = action.payload;
    },
    addNewsCovid19: (state, action) => {
      state.data.covid19 = action.payload;
    },
    addNewsEntertainment: (state, action) => {
      state.data.entertainment = action.payload;
    },
    addNewsSports: (state, action) => {
      state.data.sports = action.payload;
    },
    addNewsTechnology: (state, action) => {
      state.data.technology = action.payload;
    },
    addNewsByKeyword: (state, action) => {
      state.data.searchResult = action.payload;
    },
  },
});

export const { saveThisNews, isNewsSaved, removeLastNewsData, addDetailNews, addNewsIndonesia, addNewsProgramming, addNewsCovid19, addNewsEntertainment, addNewsSports, addNewsTechnology, addNewsByKeyword } = newsSlice.actions;

export default newsSlice.reducer;
