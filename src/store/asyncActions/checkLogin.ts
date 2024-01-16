import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { addTokenToInstanceHeader } from '../../axios/axiosInstance';
import type { RootState } from '..';
import { setTokenToLocalStorage } from '../../localStorage/localStorage';

const actionCheckLogin = createAsyncThunk(
  'CHECK_LOGIN',
  async (payload, store) => {
    console.log('payload:', payload);
    // payload contient la valeur donnée en param à l'execution de l'actionCreator
    const state = store.getState() as RootState;

    try {
      const response = await axiosInstance.post(
        '/login',
        {
          email: state.user.email,
          password: state.user.password,
        }
      );
      // ajout dans les headers de l'instance axios
      addTokenToInstanceHeader(response.data.token);

      // enregistrement le token dans le localStorage
      setTokenToLocalStorage(response.data.token, response.data.pseudo);

      return response.data;
    } catch (e) {
      console.log('error');
    }
  }
);

export default actionCheckLogin;
