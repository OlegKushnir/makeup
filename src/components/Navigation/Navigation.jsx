import css from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const path = useLocation().pathname;
  const setClassName = param => {
    if (path === param) return `${css.navLink} ${css.active}`;
    return css.navLink;
  };
  return (
    <ul className={css.thumb}>
      <li className={css.item}>
        <NavLink to="/" className={setClassName('/')}>
          Home
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/about" className={setClassName('/about')}>
          About
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/brides" className={setClassName('/brides')}>
          Brides
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/clients" className={setClassName('/clients')}>
          Clients
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/photoshoots" className={setClassName('/photoshoots')}>
          Photoshoots
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/price" className={setClassName('/price')}>
          Price
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/faq" className={setClassName('/faq')}>
          FAQ
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/contacts" className={setClassName('/contacts')}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
