import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const About = lazy(() => import('./About/About'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
