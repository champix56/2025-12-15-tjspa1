import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

const initialState = { meme: emptyMeme };

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (s, {payload}:{payload:MemeInterface}) => {
      s.meme = payload;
    },
    clear: (s) => {
      s.meme = emptyMeme;
    },
  },
});

export const { update, clear } = current.actions;
const currentReducer=current.reducer
export default currentReducer;
