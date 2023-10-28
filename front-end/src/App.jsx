import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header'; 
import Order from './Components/order/Order';
import SingleProduct from './Components/products/Products/SingleProduct';
import AllProducts from './Components/products/Products/AllProductsss';
import Home from './Components/home/Home';
import './app.css'
import NotFound from './Components/notFound/NotFound';
import SingleCategory from './Components/products/Categories/SingleCategory';
import Footer from './Components/footer/Footer';
import Categories from './Components/products/Categories/Categories';
import PagePromotion from './Components/promotion/PagePromotion';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header /> 
        <Routes>
          <Route path='/' element={<div><Home /></div>} />
          <Route path='/products/all' element={<AllProducts/>} />
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/categories/all' element={<Categories/>} />
          <Route path='/categories/:id' element={<SingleCategory/>}/>
          <Route path='/promotion' element={<PagePromotion/>}/>
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
