import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";

export const loadRessources=createAsyncThunk('ressources/load',async()=>{
    const promiseImages = fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`);
    const promiseMemes = fetch(`${REST_API_URL}${REST_API_RESSOURCES.memes}`);
    const responseAll=await Promise.all([promiseImages,promiseMemes])
    return {images:await responseAll[0].json(),memes:await responseAll[1].json()};
})