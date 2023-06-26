import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileNavigation = ({ mobileHidden, updateMobileHidden }) => {
  return (
    <div
      className={
        mobileHidden ? css.mobile__menu : `${css.mobile__menu} ${css.show}`
      }
    >
      <ul>
        <li className={css.mobile__item}>
          <NavLink
            to="/"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/about"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            About
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/portfolio"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/price"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Price
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/faq"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            FAQ
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/contacts"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MobileNavigation;

MobileNavigation.propTypes = {
  mobileHidden: PropTypes.bool.isRequired,
  updateMobileHidden: PropTypes.func.isRequired,
};