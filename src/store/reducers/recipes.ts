import { createReducer } from '@reduxjs/toolkit';
// import data from '../../data';
import { Recipe } from '../../@types/recipe';
import actionFetchRecipes from '../asyncActions/fetchRecipes';
import actionFetchFavRecipes from '../asyncActions/fetchFavRecipes';
import { actionLogout } from './user';

export interface RecipesState {
  list: Recipe[];
  favList: Recipe[];
  isLoading: boolean;
}
export const initialState: RecipesState = {
  list: [], 
  favList: [], 
  isLoading: true, // initialisé à vrai pour afficher le loader au tout premier rendu
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionFetchRecipes.fulfilled, (state, action) => {
      // dans le state recettes reçues dans le payload
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(actionFetchRecipes.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(actionFetchFavRecipes.fulfilled, (state, action) => {
      state.favList = action.payload;
    })
    .addCase(actionLogout, (state) => {
      // deconnecte -> supprime les recettes preferées
      state.favList = [];
    });
});

export default recipesReducer;
