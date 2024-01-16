/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import { Recipe } from '../../@types/recipe';

export function findRecipe(
  recipes: Recipe[],
  searchedSlug: string | undefined
) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

// getTitle
export const getTitle = (recipeList: undefined | Recipe[] = undefined) => {
  if (!recipeList) {
    return 'Voici nos recettes.';
  }
  return `Voici nos ${recipeList.length} recettes.`;
};
