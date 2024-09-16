import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import NavBar from './NavBar';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from local storage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  // Handle remove from wishlist
  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(product => product.id !== productId);
    setWishlist(updatedWishlist); // Update state
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update local storage
  };

  return (
    <div className="bg-white">
      <NavBar />
      <div className="max-w-screen-xl mx-auto p-8 bg-white text-gray-800">
        <Typography variant="h1" color="gray" className="mb-8">Your Wishlist</Typography>
        {wishlist.length === 0 ? (
          <Typography variant="h2" color="gray" className="text-center">
            Your wishlist is empty.
          </Typography>
        ) : (
          wishlist.map(product => (
            <Card key={product.id} className="shadow-lg mb-4">
              <CardBody>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <Typography variant="h2" className="mb-2">{product.name}</Typography>
                <Typography color="gray" className="mb-1">Price: ${product.price.toFixed(2)}</Typography>
                <Typography color="gray" className="mb-1">Brand: {product.brand}</Typography>
                <Typography color="gray" className="mb-1">Category: {product.category}</Typography>
                <div className="flex space-x-2 mt-4">
                  <Button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    color="red"
                    size="sm"
                  >
                    Remove from Wishlist
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
