import { combineReducers } from "redux";
import detailPostReducer from "./detailPostReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  detailPost: detailPostReducer,
});

export default rootReducer;
