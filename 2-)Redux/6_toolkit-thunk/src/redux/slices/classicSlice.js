import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setUsers: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload.users;
    },
  },
});

export const { setLoading, setError, setUsers } = classicSlice.actions;
export default classicSlice.reducer;
