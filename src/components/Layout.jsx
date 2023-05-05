import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, Suspense } from 'react';
import app from './App.module.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header/>
      <section className={app.content} aria-label="content">
        <div className={pathname === '/' ? '' : app.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Layout;
