import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';
import type { RootState } from '..';

const actionFetchFavRecipes = createAsyncThunk(
  'FETCH_FAV_RECIPES',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    // fetch les recettes pref

    const response = await axiosInstance.get(
      '/favorites',
    );
    // envoie les recettes pref reçues au reducer sauvegarde dans le state
    console.log(response);

    return response.data.favorites;
  }
);

export default actionFetchFavRecipes;
