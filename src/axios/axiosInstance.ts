import axios from 'axios';

// on créé une instance de axios, qu'on va utiliser à la place du axios classique
// au lieu de faire axios.get on va faire axiosInstance.get
const axiosInstance = axios.create({
  baseURL: 'https://orecipes-api.onrender.com/api',
});

export const addTokenToInstanceHeader = (token: string) => {
  // quand on se connecte on ajoute le token dans les headers de l'instance
  // toutes les requetes auront alors le token dans ses headers
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeTokenFromInstanceHeaders = () => {
  // quand on se deconnecte il faut supprimer le token de l'instance
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
