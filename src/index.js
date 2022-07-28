import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import ProductDetails from './ProductDetails';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route exact path='/' element ={<Login/>}/>
      <Route exact path='/App' element ={<App/>}/>
      <Route exact path='/ProductDetails' element ={<ProductDetails/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
