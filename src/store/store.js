import { configureStore } from "@reduxjs/toolkit";
import BooksDetail from "./BooksSlice";
import UsersDetail from "./UserSlice"

export const store = configureStore({
  reducer: {
    app: BooksDetail,
    user: UsersDetail
  },
});

