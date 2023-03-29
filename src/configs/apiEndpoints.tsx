export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL,
  AUTH: {
    SIGN_IN: "/login",
    SIGN_OUT: "/logout",
  },
  ARTICLE: {
    CREATE_ARTICLE: "/articles",
    LIST_ALL_ARTICLES: "/articles",
    GET_ARTICLE_DETAIL: "/articles/:slug-id",
    UPDATE_ARTICLE: "/articles/:slug-id",
  },
};
