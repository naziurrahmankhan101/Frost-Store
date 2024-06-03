import React from 'react';

import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Wishlist from './Wishlist';
import Checkout from './Checkout';
import Basic from './Basic';

const App = () => {
    return (
        <Router>
            <div className='App'> 
                
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Basic />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
