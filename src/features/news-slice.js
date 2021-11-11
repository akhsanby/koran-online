import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = {
  indo: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  programming: 'https://newsapi.org/v2/everything?q=programming&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  covid19: 'https://newsapi.org/v2/everything?q=covid19&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  entertainment: 'https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  sports: 'https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  technology: 'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
  byKeyword: 'https://newsapi.org/v2/everything?apiKey=878e17c0f1c041ffa642af8bd9c78ca7',
};

export const fetchNewsIndonesia = createAsyncThunk(
  'news/fetchNewsIndonesia',
  async () => {
    try {
      const response = await fetch(apiUrl.indo);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsProgramming = createAsyncThunk(
  'news/fetchNewsProgramming',
  async () => {
    try {
      const response = await fetch(apiUrl.programming);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsCovid19 = createAsyncThunk(
  'news/fetchNewsCovid19',
  async () => {
    try {
      const response = await fetch(apiUrl.covid19);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsEntertainment = createAsyncThunk(
  'news/fetchNewsEntertainment',
  async () => {
    try {
      const response = await fetch(apiUrl.entertainment);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsSports = createAsyncThunk(
  'news/fetchNewsSports',
  async () => {
    try {
      const response = await fetch(apiUrl.sports);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsTechnology = createAsyncThunk(
  'news/fetchNewsTechnology',
  async () => {
    try {
      const response = await fetch(apiUrl.technology);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

export const fetchNewsByKeyword = createAsyncThunk(
  'news/fetchNewsByKeyword',
  async (keyword, thunkAPI) => {
    try {
      thunkAPI.dispatch(setSearchKeyword(keyword));
      const response = await fetch(apiUrl.byKeyword.concat(`&q=${keyword}`));
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
);

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
    detailNewsResult: {},
  },
  keyword: null,
  loading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    saveThisNews: (state, action) => {
      const dataToFind = state.data.saved.find((item) => item.article.title === action.payload.article.title);
      if (dataToFind) {
        const filtered = state.data.saved.filter((item) => item.article.title !== dataToFind.article.title);
        state.data.saved = filtered;
      } else {
        state.data.saved.push(action.payload);
      }
    },
    setSearchKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    removeLastNewsData: (state) => {
      state.data.searchResult = {};
    },
    addDetailNewsOnClick: (state, action) => {
      state.data.detailNewsResult = action.payload;
    },
  },
  extraReducers: {
    // indonesia
    [fetchNewsIndonesia.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsIndonesia.fulfilled]: (state, action) => {
      state.data.indonesia = action.payload;
      state.loading = false;
    },
    [fetchNewsIndonesia.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // programming
    [fetchNewsProgramming.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsProgramming.fulfilled]: (state, action) => {
      state.data.programming = action.payload;
      state.loading = false;
    },
    [fetchNewsProgramming.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // covid19
    [fetchNewsCovid19.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsCovid19.fulfilled]: (state, action) => {
      state.data.covid19 = action.payload;
      state.loading = false;
    },
    [fetchNewsCovid19.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // entertainment
    [fetchNewsEntertainment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsEntertainment.fulfilled]: (state, action) => {
      state.data.entertainment = action.payload;
      state.loading = false;
    },
    [fetchNewsEntertainment.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // sports
    [fetchNewsSports.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsSports.fulfilled]: (state, action) => {
      state.data.sports = action.payload;
      state.loading = false;
    },
    [fetchNewsSports.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // technology
    [fetchNewsTechnology.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsTechnology.fulfilled]: (state, action) => {
      state.data.technology = action.payload;
      state.loading = false;
    },
    [fetchNewsTechnology.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    // search by keyword
    [fetchNewsByKeyword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchNewsByKeyword.fulfilled]: (state, action) => {
      state.data.searchResult = action.payload;
      state.loading = false;
    },
    [fetchNewsByKeyword.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const {
  saveThisNews, setSearchKeyword, removeLastNewsData, addDetailNewsOnClick,
} = newsSlice.actions;

export default newsSlice.reducer;
