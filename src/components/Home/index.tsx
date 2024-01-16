import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { useAppSelector } from '../../hooks/redux';
import { getTitle } from '../../store/selectors/recipes';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);
  // useSelector avec en param fonction de selection qui recupère le nombre de recettes
  // appel getTitle
  const title = useAppSelector((state) => getTitle(state.recipes.list));

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={title}
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
