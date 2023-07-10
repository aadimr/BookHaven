import { configureStore } from "@reduxjs/toolkit";
import BooksDetail from "./BooksSlice";
import UsersDetail from "./UserSlice";
import getInTouchDetail from "./GetInTouchSlice";


export const store = configureStore({
  reducer: {
    app: BooksDetail,
    user: UsersDetail,
    getInTouch: getInTouchDetail,
  },
});

