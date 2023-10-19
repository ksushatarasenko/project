import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header'; 
import Order from './Components/order/Order';
import Products from './Components/products/Products/Products';
import Product from './Components/products/Products/Product';
import Home from './Components/home/Home';
import './app.css'
import NotFound from './Components/notFound/NotFound';
import SingleCategory from './Components/products/Categories/SingleCategory';
import PageCategories from './Components/products/Categories/PageCategories';
import PagePromotion from './Components/promotion/PagePromotion';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header /> 
        <Routes>
          <Route path='/' element={<div><Home /></div>} />
          <Route path='/products/all' element={<Products/>} />
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/categories/all' element={<PageCategories/>} />
          <Route path='/categories/:id' element={<SingleCategory/>}/>
          <Route path='/promotion' element={<PagePromotion/>}/>
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
