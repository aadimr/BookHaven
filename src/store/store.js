import { configureStore } from "@reduxjs/toolkit";
import BooksDetail from "./BooksSlice";

export const store = configureStore({
  reducer: {
    app: BooksDetail,
  },
});

