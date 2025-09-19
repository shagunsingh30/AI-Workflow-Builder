import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  open: boolean;
}

const initialState: modalState = {
  open: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = LayoutSlice.actions;
export default LayoutSlice.reducer;
