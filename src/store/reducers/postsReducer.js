import { GET_POSTS, HIDE_ERROR, HIDE_LOADING, SHOW_ERROR, SHOW_LOADING, SHOW_POSTS } from "../types";

const initialState = {
  posts: [],
  showPosts: [],
  loading: false,
  error: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case SHOW_POSTS:
      return { ...state, showPosts: action.payload };
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: true };
    case HIDE_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default postsReducer;
