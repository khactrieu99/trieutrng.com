import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Api from "api";
import LoadingReducer from "./features/LoadingSlice";
import PageReducer from "./features/PageSlice";
import TagReducer from "./features/TagSlice";
import ArticleReducer from "./features/ArticleSlice";
import ConfirmPopupReducer from "./features/ConfirmPopupSlice";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  page: PageReducer,
  tag: TagReducer,
  article: ArticleReducer,
  confirmPopup: ConfirmPopupReducer
})

const extraArgument = {
  api: Api
}

const customizedMiddlewares = (getDefaultMiddleware) => 
getDefaultMiddleware({
  serializableCheck: false,
  thunk: {
    extraArgument: extraArgument
  }
})

const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddlewares
})

extraArgument.store = store;

export default store;