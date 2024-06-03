import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Wishlist from './Wishlist';
import Checkout from './Checkout';
import Login from './Login';

const App = () => {
    return (
        <Router>
            <div className='App'> 
                <NavBar />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
