import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);
  const logged = useAppSelector((state) => state.user.logged);

  // fonction qui renvoie la bonne class de nos navLinks
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'menu-link menu-link--active' : 'menu-link';
  };

  return (
    <nav className="menu">
      <NavLink className={getNavLinkClassName} to="/">
        Accueil
      </NavLink>
      {logged && (
        <NavLink className={getNavLinkClassName} to="/favorites">
          ❤️ Recettes favorites
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={getNavLinkClassName}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
