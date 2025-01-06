import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './Context/ProductContext.jsx';
import FavoritesProvider from './Context/FavoritesContext.jsx';
import BasketProvider from './Context/BasketContext.jsx';


createRoot(document.getElementById('root')).render(

  <>
    <BasketProvider>
      <FavoritesProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </FavoritesProvider>
    </BasketProvider>
  </>
)