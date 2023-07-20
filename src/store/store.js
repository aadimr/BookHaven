import { configureStore } from "@reduxjs/toolkit";
import BooksDetail from "./BooksSlice";
import UsersDetail from "./UserSlice";
import getInTouchDetail from "./GetInTouchSlice";
import filteredBooksDetail from "./filterBookSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: "filteredBook",
  storage
};

const persistedReducer = persistReducer(persistConfig, filteredBooksDetail);

export const store = configureStore({
  reducer: {
    app: BooksDetail,
    user: UsersDetail,
    getInTouch: getInTouchDetail,
    filteredBook: persistedReducer,
  },
});