import { FormEvent } from 'react';
import Field from './Field';

import './styles.scss';

interface LoginFormProps {
  // la chaine affichée dans l'input email
  email: string;
  // la chaine affichée dans l'input password
  password: string;
  // fonction executé au change de l'input email ou password
  changeField: (value: string, name: 'email' | 'password') => void;
  // fonction executé au submit du form
  handleLogin: () => void;
  // fonction executée au click sur le bouton de deconnexion
  handleLogout: () => void;
  // si vrai bouton de deco, si faux formulaire
  isLogged?: boolean;
  // message affichée si isLogged est true
  loggedMessage?: string;
}
function LoginForm({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}: LoginFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  const handleChangeField = (name: 'email' | 'password') => (value: string) => {
    changeField(value, name);
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            placeholder="Adresse Email"
            onChange={handleChangeField('email')}
            value={email}
          />
          <Field
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField('password')}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
}

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
