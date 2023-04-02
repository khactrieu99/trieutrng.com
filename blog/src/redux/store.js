import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Api from "api";
import ArticleReducer from "./features/ArticleSlice";

const rootReducer = combineReducers({
  article: ArticleReducer,
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