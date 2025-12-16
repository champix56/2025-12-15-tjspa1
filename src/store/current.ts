import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme, type MemeInterface } from 'orsys-tjs-meme';
import { saveCurrent } from './asyncCaller';
interface ICurrentState {
    meme: MemeInterface
}
const initialState: ICurrentState = {
    meme: emptyMeme
}

const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        update: (state, { payload }: { type: string, payload: MemeInterface }) => {
            state.meme = payload
        },
        clear: (state) => {
            state.meme = emptyMeme
        }
    },
    extraReducers: (builder) => {
        builder.addCase(saveCurrent.fulfilled, (state, { payload }: { type: string, payload: MemeInterface }) => {
            state.meme = payload;
        })
    }
});

export const { update, clear } = current.actions

const currentReducer = current.reducer
export default currentReducer