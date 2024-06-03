
import React from 'react';
import Hero from './Hero';
import LogoSection6 from './LogoSection6';
import ProductListSection4 from './ProductListCard';
import { SimpleFooter } from './SimpleFooter';

const Home = () => {
  return (
    <div className='Homepage'>
        <Hero />

        <LogoSection6 />

        <ProductListSection4 />

        <SimpleFooter />
        

    </div>
  )
}

export default Home;