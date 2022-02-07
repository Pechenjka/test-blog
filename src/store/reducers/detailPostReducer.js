import {
  GET_DETAIL_POST,
  HIDE_DETAIL_POST_ERROR,
  HIDE_DETAIL_POST_LOADING,
  SHOW_DETAIL_POST_ERROR,
  SHOW_DETAIL_POST_LOADING,
} from "../types";

const initialState = {
  detailPost: {},
  detailPostLoading: false,
  detailPostError: false,
};

const detailPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_POST:
      return { ...state, detailPost: action.payload };
    case SHOW_DETAIL_POST_LOADING:
      return { ...state, detailPostLoading: true };
    case HIDE_DETAIL_POST_LOADING:
      return { ...state, detailPostLoading: false };
    case SHOW_DETAIL_POST_ERROR:
      return { ...state, detailPostError: true };
    case HIDE_DETAIL_POST_ERROR:
      return { ...state, detailPostError: false };
    default:
      return state;
  }
};
export default detailPostReducer;
