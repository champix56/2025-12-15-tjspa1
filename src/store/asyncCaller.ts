import { createAsyncThunk, type AsyncThunk, type AsyncThunkConfig } from "@reduxjs/toolkit";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";
import type { MemeInterface } from "orsys-tjs-meme";
export const fetchDatas = createAsyncThunk("ressources/fetch", async () => {
  const pi = fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`);
  const pm = fetch(`${REST_API_URL}${REST_API_RESSOURCES.memes}`);
  const ra = await Promise.all([pi, pm]);
  return { memes: await ra[1].json(), images: await ra[0].json() };
});
export const saveMeme:AsyncThunk<MemeInterface, MemeInterface, AsyncThunkConfig> = createAsyncThunk('current/save', async (meme: MemeInterface) => {
    const response = await fetch(`${REST_API_URL}${REST_API_RESSOURCES.memes}${meme.id !== undefined ? `/${meme.id}` : ''}`, {
        method: meme.id !== undefined ? 'PUT' : 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme)
    })
    return await response.json()
})