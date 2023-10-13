import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './components/Notes';
import ToDo from './components/ToDo';
import store from './store';
import { Provider } from 'react-redux';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);