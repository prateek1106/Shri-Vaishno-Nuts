import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductsPage from './components/productsPage/productsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>,
  document.getElementById('root')
);
