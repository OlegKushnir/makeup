import app from '../App.module.css';
import css from './Portfolio.module.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

// import Brides from 'components/Brides/Brides';
// import Photoshoots from 'components/Photoshoots/Photoshoots';
// import Clients from 'components/Clients/Clients';

const Portfolio = () => {
  const [navOpen, setNavOpen] = useState(true);
  const path = useLocation().pathname;
  const setClassName = param => {
    let mainClass = '';
    switch (param) {
      case '/portfolio/brides':
        mainClass += ` ${css.brides__link}`;
        if (!navOpen) mainClass += ` ${css.min}`;
        if (path === param) mainClass += ` ${css.active}`;
        return mainClass;
      case '/portfolio/photoshoots':
        mainClass += ` ${css.photoshoots__link}`;
        if (!navOpen) mainClass += ` ${css.min}`;
        if (path === param) mainClass += ` ${css.active}`;
        return mainClass;
      case '/portfolio/clients':
        mainClass += `${css.clients__link}`;
        if (!navOpen) mainClass += ` ${css.min}`;
        if (path === param) mainClass += ` ${css.active}`;
        return mainClass;
      default:
        break;
    }
  };
  setClassName('/brides');
  useEffect(() => {
    if (path !== '/portfolio') setNavOpen(false);
    else setNavOpen(true);
  }, [path]);
  return (
    <section className={css.portfolio}>
      <nav className={app.list}>
        <NavLink to="brides" className={setClassName('/portfolio/brides')}>
          <h2 className={css.title}>Brides</h2>
        </NavLink>
        <NavLink
          to="photoshoots"
          className={setClassName('/portfolio/photoshoots')}
        >
          <h2 className={css.title}>Photoshoots</h2>
        </NavLink>
        <NavLink to="clients" className={setClassName('/portfolio/clients')}>
          <h2 className={css.title}>Clients</h2>
        </NavLink>
      </nav>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </section>
  );
};
export default Portfolio;
