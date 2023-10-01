import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header'; 
import Categories from './Components/Products/Categories/Categories';
import SingleCategories from './Components/Products/Categories/SingleCategories';
import Order from './Components/Order/Order';
import Products from './Components/Products/Products/Products';
import Product from './Components/Products/Products/Product';
import Home from './Components/home/Home';
import './app.css'
import NotFound from './Components/notFound/NotFound';
import Promotion from './Components/Promotion/Promotion';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header /> 
        <Routes>
          <Route path='/' element={<div><Home /></div>} />
          <Route path='/products/all' element={<Products/>} />
          <Route path='/products/:idProd' element={<Product/>}/>
          <Route path='/categories/all' element={<Categories />} />
          <Route path='/categories/:id' element={<SingleCategories/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          {/* <Route path='/discount' element={<Discount />} />
          <Route path='/contact' element={<Footer />} /> */}
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
