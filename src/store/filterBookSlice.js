import { createSlice } from "@reduxjs/toolkit";

export const filteredBooksDetail = createSlice({
  name: "filteredBooks",
  initialState: {
    filteredByAuthorName: [],
  },

  reducers: {
    getCheckedAuthor: (state, action) => {
      state.filteredByAuthorName.push(action.payload)
    },
    getUnCheckedAuthor: (state, action) => {
      state.filteredByAuthorName = state.filteredByAuthorName.filter(ele => ele !== action.payload)
    },
  },
});

export const { getCheckedAuthor, getUnCheckedAuthor } = filteredBooksDetail.actions;

export default filteredBooksDetail.reducer 