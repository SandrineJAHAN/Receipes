import './styles.scss';
import Logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  actionChangeInputValue,
  actionLogout,
} from '../../store/reducers/user';
import actionCheckLogin from '../../store/asyncActions/checkLogin';
import { removeTokenFromInstanceHeaders } from '../../axios/axiosInstance';
import { removeTokenFromLocalStorage } from '../../localStorage/localStorage';

function AppHeader() {
  // recup les valeur de email et password depuis le state redux pour les input controlés
  const email = useAppSelector((state) => state.user.email);
  const password = useAppSelector((state) => state.user.password);

  // on recup logged et le pseudo du state pour filer à LoginForm
  const logged = useAppSelector((state) => state.user.logged);
  const pseudo = useAppSelector((state) => state.user.pseudo);

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <img src={Logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email} // value de l'input email
        password={password} // value de l'input password
        changeField={(value, name) => {
          dispatch(actionChangeInputValue({ value, name }));
        }}
        handleLogin={() => {
          // fonction executé au submit du form
          dispatch(actionCheckLogin());
        }}
        handleLogout={() => {
          // fonction executée au click sur le bouton de deconnexion
          // modif le state : vider pseudo et token et passer logged à false 
          dispatch(actionLogout());
          // supp le token des headers de l'instance axios
          removeTokenFromInstanceHeaders();
          // supp le token du localStorage
          removeTokenFromLocalStorage();
        }}
        isLogged={logged} // si vrai on affiche le bouton de deco, si faux on affiche le formulaire
        loggedMessage={`Bonjour ${pseudo}`}
      />
    </header>
  );
}

export default AppHeader;
