import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './components/Notes';
import ToDo from './components/ToDo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/todo' element={<ToDo />} />
    </Routes>

  </BrowserRouter>
);