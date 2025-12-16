import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";

export const loadImages=createAsyncThunk('ressources/load',async()=>{
    const response =await fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`);
    return await response.json();
})