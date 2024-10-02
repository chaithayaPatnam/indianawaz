import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Blogs from './components/pages/Blogs';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
  
          <Route  path='/' exact element={<Home/>}  />
          <Route  path='/services' element={<Services/>}/>
          <Route  path='/products' element={<Products/>}/>
          <Route  path='/blogs' element={<Blogs/>}/>
          <Route  path='/contactus' element={<ContactUs/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
