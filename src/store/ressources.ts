import { createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import {images,memes} from '../../db.json'
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
});


const  ressourcesReducer= ressources.reducer;
export default ressourcesReducer;
