import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "../actions";
import { get } from "../../../node_modules/immer/src/utils/common";

const initialState = {
  flightId: null,
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    open: (state, action) => {
      state.flightId = action.payload;
    },

    close: (state) => {
      state.flightId = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetail.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.info = payload;
      state.route = payload.trail;
    });
  },
});

export const { open, close } = detailSlice.actions;

export default detailSlice.reducer;
