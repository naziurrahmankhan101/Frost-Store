import React from 'react';

import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './Shop';
import Wishlist from './Wishlist';
import Checkout from './Checkout';
import Basic from './Basic';
import Dashboard from './Dashboard';
import UploadBook from './UploadBook';
import ManageBooks from './ManageBooks';
import EditBooks from './EditBooks';

const App = () => {
    return (
        <Router>
            <div className='App'> 
                
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Basic />} />
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/upload" element={<UploadBook />} />
                        <Route path="/admin/manage" element={<ManageBooks />} />
                        <Route path="/admin/edit/:id" element={<EditBooks />} />
                        
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
