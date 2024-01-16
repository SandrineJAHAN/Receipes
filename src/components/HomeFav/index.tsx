import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import actionFetchFavRecipes from '../../store/asyncActions/fetchFavRecipes';

function HomeFav() {
  // recettes pref
  const favRecipes = useAppSelector((state) => state.recipes.favList);

  const dispatch = useAppDispatch();

  // chargement des recettes fav
  useEffect(() => {
    // middleware -> faire le fetch
    dispatch(actionFetchFavRecipes());
  }, []);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Les meilleures !!!"
        recipes={favRecipes}
      />
    </Page>
  );
}

export default HomeFav;
