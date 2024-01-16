export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const pseudo = localStorage.getItem('pseudo');
  return { token, pseudo };
};

/**
 * fonction qui place le token reçu en param dans le localStorage
 */
export const setTokenToLocalStorage = (token: string, pseudo: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('pseudo', pseudo);
};

/**
 * fonction qui supprime le token du localStorage
 */
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('pseudo');
};
