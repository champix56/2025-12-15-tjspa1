import { createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import {images,memes} from '../../db.json'
import { fetcDatas } from "./asyncCaller";
interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
  loaded: boolean;
}
const initialState: IRessourcesState = {
  memes: memes,
  images: images,
  loaded: true,
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
   
  },
  extraReducers:(b)=>{
    b.addCase(fetcDatas.fulfilled,(s,a)=>{
      s.memes=a.payload.memes;
      s.images=a.payload.images;
    })
  }
});


const  ressourcesReducer= ressources.reducer;
export default ressourcesReducer;
