import {
  GET_DETAIL_POST,
  GET_POSTS,
  HIDE_DETAIL_POST_ERROR,
  HIDE_DETAIL_POST_LOADING,
  HIDE_ERROR,
  HIDE_LOADING,
  SHOW_DETAIL_POST_ERROR,
  SHOW_DETAIL_POST_LOADING,
  SHOW_ERROR,
  SHOW_LOADING,
  SHOW_POSTS,
} from "../types";
import postsApi from "../../utils/postsApi";

export const getPostsAction = (data) => {
  return {
    type: GET_POSTS,
    payload: data,
  };
};
export const getDetailPostAction = (data) => {
  return {
    type: GET_DETAIL_POST,
    payload: data,
  };
};
export const showPostsAction = (data) => {
  return {
    type: SHOW_POSTS,
    payload: data,
  };
};
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};
export const showError = () => {
  return {
    type: SHOW_ERROR,
  };
};
export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};
const showDetailPostLoading = () => {
  return {
    type: SHOW_DETAIL_POST_LOADING,
  };
};
const hideDetailPostLoading = () => {
  return {
    type: HIDE_DETAIL_POST_LOADING,
  };
};
export const showDetailPostError = () => {
  return {
    type: SHOW_DETAIL_POST_ERROR,
  };
};
export const hideDetailPostError = () => {
  return {
    type: HIDE_DETAIL_POST_ERROR,
  };
};
export const handlerGetPosts = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return postsApi
      .getPosts()
      .then((data) => {
        return [...data].sort((a, b) => b.id - a.id);
      })
      .then((sortData) => {
        dispatch(getPostsAction(sortData));
        dispatch(showPostsAction(sortData.slice(0, 6)));
      })
      .catch((err) => {
        dispatch(showError());
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
};

export const handlerGetDetailPost = (id) => {
  return (dispatch) => {
    dispatch(showDetailPostLoading());
    return postsApi
      .getDetailPost(id)
      .then((data) => {
        dispatch(getDetailPostAction(data));
      })
      .catch((err) => {
        dispatch(showDetailPostError());
      })
      .finally(() => {
        dispatch(hideDetailPostLoading());
      });
  };
};
