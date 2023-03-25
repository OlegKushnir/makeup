import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    
      <ul className={css.thumb}>
        <li className={css.item}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/about" className={css.navLink}>
            About
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/brides" className={css.navLink}>
            Brides
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/clients" className={css.navLink}>
          Clients
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/photoshoots" className={css.navLink}>
          Photoshoots
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/price" className={css.navLink}>
          Price
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/faq" className={css.navLink}>
          FAQ
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    
  );
};
export default Navigation;
