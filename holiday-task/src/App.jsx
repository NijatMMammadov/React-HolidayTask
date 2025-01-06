import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ROUTES from './Router/router'
const routes = createBrowserRouter(ROUTES)
function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

