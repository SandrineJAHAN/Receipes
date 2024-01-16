// import des composants de react-router-dom 
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import actionFetchRecipes from '../../store/asyncActions/fetchRecipes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';
import Loading from './Loading';
import HomeFav from '../HomeFav';

import './App.scss';
import { getTokenFromLocalStorage } from '../../localStorage/localStorage';
import { actionLogin } from '../../store/reducers/user';
import { addTokenToInstanceHeader } from '../../axios/axiosInstance';

function App() {
  const dispatch = useAppDispatch();

  // modifie le state au premier rendu
  useEffect(() => {
    const { token, pseudo } = getTokenFromLocalStorage();
    if (token) {
      // on dispatch une action vers le reducer pour enregistrer le token et logged à true
      dispatch(actionLogin(pseudo));
      // enregistre ce token dans l'instance axios
      addTokenToInstanceHeader(token);
    }
  }, []);

  // recup loading depuis le state redux
  const loading = useAppSelector((state) => state.recipes.isLoading);

  // recup logged pour conditionner les routes privées
  const logged = useAppSelector((state) => state.user.logged);

  useEffect(() => {
    // dispatche une demande de fetch pour aller chercher les recettes vers un middleware (thunk)
    dispatch(actionFetchRecipes());
  }, []);

  // hook useLocation -> recupère le pathname (l'url)
  // met tableau de dependances de l'effet scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll en haut de la page
    window.scrollTo({ top: 0 });
  }, [pathname]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        {logged && <Route path="/favorites" element={<HomeFav />} />}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
