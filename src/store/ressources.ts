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
        addMeme: (state, { type, payload }: {
            payload: any;
            type: string;
        }) => {
            state.memes.push(payload);
        },
        removeMeme: (state, { type, payload }) => {
            const position = state.memes.findIndex(m => m.id === payload.id)
            if (position < 0) return state;

            const endArray = state.memes.slice(position + 1);
            state.memes.splice(0, position);
            state.memes.push(...endArray);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadImages.fulfilled, (state, action: { type: string, payload: Array<ImageInterface> }) => {
            state.images.push(...action.payload)
        })
    }
});

export const { addMeme, removeMeme } = ressources.actions
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer