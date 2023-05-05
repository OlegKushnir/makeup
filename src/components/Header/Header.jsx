import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import app from '../App.module.css';
import css from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../Navigation/MobileNavigation';

import { useState } from 'react';

const Header = () => {
  const { pathname } = useLocation();
  const [mobileHidden, updateMobileHidden] = useState(true);
  useLayoutEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <header>
      <div className={app.container}>
        <div className={css.wrapper}>
          <div className={app.logo__thumb}>
            <NavLink to="/" className={css.navLink}>
              <span className={app.logo}>Kate Makhlai</span>
            </NavLink>
          </div>

          <button
            type="button"
            className={css.menu__button}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            {mobileHidden ? (
              <svg width="40" height="40">
                <use href="icons.svg#menu_40px"></use>
              </svg>
            ) : (
              <svg width="35" height="35">
                <use href="icons.svg#close-black"></use>
              </svg>
            )}
          </button>
          <Navigation />
          <MobileNavigation
            mobileHidden={mobileHidden}
            updateMobileHidden={updateMobileHidden}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
