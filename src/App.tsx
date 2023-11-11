import React from 'react';
import Home from './view/Home';
import Caution from './view/Caution';
import Riding from './view/Riding';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Caution" element={<Caution />} />
          <Route path="/Riding" element={<Riding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
