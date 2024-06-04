
import React from 'react';
import Hero from './Hero';
import LogoSection6 from './LogoSection6';
import ProductListSection4 from './ProductListCard';
import { SimpleFooter } from './SimpleFooter';
import NavBar from './NavBar';
import QuantityEdit from './QuantityEdit';

const Home = () => {
  return (
    <div className='Homepage'>
        <NavBar />

        <Hero />

        <LogoSection6 />

        <ProductListSection4 />

        <SimpleFooter />

        
    </div>
  )
}

export default Home;