import React from 'react';
import logo from './logo.svg';
import Home from './view/Home';
import Caution from './view/Caution';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* src/view/Caution 함수 수정해 주세요 */}
          <Route path="/Caution" element={<Caution />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
