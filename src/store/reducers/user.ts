import { createAction, createReducer } from '@reduxjs/toolkit';
import actionCheckLogin from '../asyncActions/checkLogin';

interface UserState {
  logged: boolean;
  email: string;
  password: string;
  pseudo: null | string;
}
export const initialState: UserState = {
  logged: false,
  email: '',
  password: '',
  pseudo: null,
};

// action dispatchée au change de l'input email ou password
export const actionChangeInputValue = createAction<{
  value: string; // nouvelle valeur à placer dans le state
  name: 'email' | 'password'; // le nom de la propriété du state à modifier
}>('CHANGE_INPUT_VALUE');

// action dispatchée au chargement si un token a été trouvé dans le localStorage
export const actionLogin = createAction<string>('LOGIN');

// action dispatchée au click sur le bouton de deconnexion
export const actionLogout = createAction('LOGOUT');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeInputValue, (state, action) => {
      state[action.payload.name] = action.payload.value;
    })
    .addCase(actionCheckLogin.fulfilled, (state, action) => {
      // action dispatchée en cas de 200 reçue
      state.logged = true;
      state.pseudo = action.payload.pseudo;
    })
    .addCase(actionLogout, (state) => {
      // vider pseudo et token et passer logged à false 
      state.pseudo = null;
      state.logged = false;
    })
    .addCase(actionLogin, (state, action) => {
      state.logged = true;
      state.pseudo = action.payload;
    });
});

export default userReducer;
