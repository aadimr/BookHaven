import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// getInTouch action
export const getInTouch = createAsyncThunk(
    "getInTouch",
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            "https://64abec939edb4181202ecce5.mockapi.io/GetInTouch",
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


export const getInTouchDetail = createSlice({
    name: "getInTouchDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(getInTouch.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInTouch.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(getInTouch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export default getInTouchDetail.reducer;