import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { loadImages } from './asyncCaller';
interface IRessourcesState {
    memes: Array<MemeInterface>;
    images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
    memes: [],
    images: []
}

const ressources = createSlice({
    name: 'ressources',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loadImages.fulfilled, (state, action: { type: string, payload: Array<ImageInterface> }) => {
            state.images.push(...action.payload)
        })
    }
});

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer