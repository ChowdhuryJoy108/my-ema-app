import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notmatch from './components/Notmatch/Notmatch';
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {
  return (
    <div className="">
      <Header></Header>

      <Router>
        <Routes>
          <Route  path='/' element={<Shop />} />
          <Route exact path="/shop" element={ <Shop />} />
          <Route exact path='/review' element={<Review />} />
          <Route exact path="/inventory" element={ <Inventory />} />
          <Route exact path="/product/:productid" element={<ProductDetail />} />
          <Route path='*' element={<Notmatch />} />

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
