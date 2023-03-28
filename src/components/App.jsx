import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const About = lazy(() => import('./About/About'));
const Brides = lazy(() => import('./Brides/Brides'));
const Clients = lazy(() => import('./Clients/Clients'));
const Photoshoots = lazy(() => import('./Photoshoots/Photoshoots'));
const Price = lazy(() => import('./Price/Price'));
const Faq = lazy(() => import('./Faq/Faq'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/brides" element={<Brides />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/photoshoots" element={<Photoshoots />} />
        <Route path="/price" element={<Price />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
