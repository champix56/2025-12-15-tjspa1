import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { loadRessources, saveCurrent } from './asyncCaller';
interface IRessourcesState {
    memes: Array<MemeInterface>;
    images: Array<ImageInterface>;
    loaded:boolean;
}
const initialState: IRessourcesState = {
    memes: [],
    images: [],
    loaded:false
}

const ressources = createSlice({
    name: 'ressources',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loadRessources.fulfilled, (state, action: { type: string, payload: { images: Array<ImageInterface>, memes: Array<MemeInterface> } }) => {
            state.images.push(...action.payload.images)
            state.memes.push(...action.payload.memes)
            state.loaded=true;
        }) 
    }
});

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer