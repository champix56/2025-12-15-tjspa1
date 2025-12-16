import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { loadRessources, saveCurrent } from './asyncCaller';
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
        builder.addCase(loadRessources.fulfilled, (state, action: { type: string, payload: { images: Array<ImageInterface>, memes: Array<MemeInterface> } }) => {
            state.images.push(...action.payload.images)
            state.memes.push(...action.payload.memes)
        })
        builder.addCase(saveCurrent.fulfilled,(state,{payload})=>{
            const position=state.memes.findIndex(m=>m.id===payload.id);
            if(position>=0){
                state.memes[position]=payload;
            }
            else{
                state.memes.push(payload);
            }
        })
    }
});

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer