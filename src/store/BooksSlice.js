import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createBook = createAsyncThunk(
  "createBook",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://647c4884c0bae2880ad0867a.mockapi.io/CRUD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read action
export const showBook = createAsyncThunk(
  "ShowBook",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://647c4884c0bae2880ad0867a.mockapi.io/CRUD"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete action
export const deleteBook = createAsyncThunk(
  "deleteBook",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://647c4884c0bae2880ad0867a.mockapi.io/CRUD/${id}`,
      {method:"DELETE"}
    );
    try {
      const result = await response.json();
      console.log(result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update action
export const updateBook = createAsyncThunk(
  "updateBook",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://647c4884c0bae2880ad0867a.mockapi.io/CRUD/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const BooksDetail = createSlice({
  name: "Book",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(showBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(showBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(showBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        if(id){
          state.books = state.books.filter((ele) => ele.id !== id)
        }
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
       state.books = state.books.map((ele) => 
        ele.id === action.payload.id ? action.payload : ele
       )
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default BooksDetail.reducer;




















