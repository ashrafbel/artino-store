import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Getstarted from './Components/Getstarted/Getstarted';
import Viewoffers from './Components/Viewoffers/Viewoffers';
import AllProducts from './Components/Allproducts/Allproducts';
import Productpage from './Components/Productpage/Productpage';
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/getstarted" element={<Getstarted />} />
            <Route path="/login" element={<Login />} />
            <Route path="/viewoffers" element={<Viewoffers />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/productpage/:id" element={<Productpage />}  />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
