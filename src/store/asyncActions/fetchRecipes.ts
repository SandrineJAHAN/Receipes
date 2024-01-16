import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';

const actionFetchRecipes = createAsyncThunk('FETCH_RECIPES', async () => {
  const result = await axiosInstance.get('/recipes');
  console.log(result);
  return result.data;
});

export default actionFetchRecipes;
