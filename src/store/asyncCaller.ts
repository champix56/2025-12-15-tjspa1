import { createAsyncThunk, type AsyncThunk, type AsyncThunkConfig } from "@reduxjs/toolkit";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk('ressources/load', async () => {
    const promiseImages = fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`);
    const promiseMemes = fetch(`${REST_API_URL}${REST_API_RESSOURCES.memes}`);
    const responseAll = await Promise.all([promiseImages, promiseMemes])
    return { images: await responseAll[0].json(), memes: await responseAll[1].json() };
})
export const saveCurrent:AsyncThunk<MemeInterface, MemeInterface, AsyncThunkConfig> = createAsyncThunk('current/save', async (meme: MemeInterface) => {
    const response = await fetch(`${REST_API_URL}${REST_API_RESSOURCES.memes}${meme.id !== undefined ? `/${meme.id}` : ''}`, {
        method: meme.id !== undefined ? 'PUT' : 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme)
    })
    return await response.json()
})