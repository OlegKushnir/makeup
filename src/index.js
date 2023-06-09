import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'normalize.css';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter } from 'react-router-dom';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}); //  mobile menu height fix

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/makeup/">
      <App />
    </BrowserRouter>
);