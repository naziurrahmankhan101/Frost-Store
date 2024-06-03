import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import LogoSection6 from './LogoSection6';
import ProductListSection4 from './ProductListCard';
import { SimpleFooter } from './SimpleFooter';
import Basic from './Basic';


const App = () => {
    return (
        <div>
            <NavBar />

            <Hero />

            <LogoSection6 />

            <ProductListSection4 />           

            <Basic />

            <SimpleFooter />
            
        </div>
    );
};

export default App;
