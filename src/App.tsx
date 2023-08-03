import { Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import NotFound from './NotFound/NotFound';
import MainLayout from './Layouts/MainLayout';
import Products from './Products/Products';
import ProductPage from './Produkt/ProductPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
