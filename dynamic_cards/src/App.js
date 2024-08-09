import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonCard from './Pages/PokemonCard';
import Navbar from './Layout/Navbar';
// import HomeWithoutFooter from './Pages/HomeWithoutFooter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar><Home /></Navbar>}></Route>
          {/* <Route path='/w' element={<Navbar type="Without-footer"><HomeWithoutFooter /></Navbar>}></Route> */}
          <Route path='/PokemonCard' element={<PokemonCard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
