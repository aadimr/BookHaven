import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log(data)
    const response = await fetch(
      "https://64a05a68ed3c41bdd7a73ca1.mockapi.io/userInfo/userInfo",
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

export const UsersDetail = createSlice({
    name: "User",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },

    extraReducers: (builder) => {
        builder
          .addCase(createUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
          })
          .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          })
        }    
    });

    export default UsersDetail.reducer;
