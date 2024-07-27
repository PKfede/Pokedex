import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar.tsx'
import Home from './views/Home.tsx'
import Pokedex from './views/Pokedex.tsx';
import TheaterPrices from './views/TheaterPrices.tsx';
import RickMorty from './views/RickMorty.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Pokedex" element={<Pokedex />}></Route>
        <Route path="TheaterPrices" element={<TheaterPrices />}></Route>
        <Route path="RickMorty" element={<RickMorty />}></Route>
        <Route path="Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
