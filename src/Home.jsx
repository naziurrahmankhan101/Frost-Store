
import React from 'react';

import LogoSection6 from './LogoSection6';
import ProductListSection4 from './ProductListCard';
import { SimpleFooter } from './SimpleFooter';
import NavBar from './NavBar';
import { FeaturedImageGallery } from './Gallery';


const Home = () => {
  return (
    <div className='Homepage'>
        <NavBar />

        <FeaturedImageGallery />

        
        <ProductListSection4 />

        <LogoSection6 />


        <SimpleFooter />

        
    </div>
  )
}

export default Home;