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
import Footer from './Components/footer/Footer';
import Categories from './Components/products/Categories/Categories';
import Promotion from './Components/promotion/Promotion';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header /> 
        <Routes>
          <Route path='/' element={<div><Home /></div>} />
          <Route path='/products/all' element={<Products/>} />
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/categories/all' element={<Categories/>} />
          <Route path='/categories/:id' element={<SingleCategory/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
