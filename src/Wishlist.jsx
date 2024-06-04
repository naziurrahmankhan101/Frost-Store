import React, { useState } from 'react';
import NavBar from './NavBar';
import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";

const initialProducts = [
  { brand: "Nike", name: "Nike Air Max", price: 120 },
  { brand: "Nike", name: "Nike React", price: 130 },
  { brand: "Adidas", name: "Adidas Ultraboost", price: 180 },
  { brand: "Adidas", name: "Adidas Superstar", price: 85 },
  { brand: "Puma", name: "Puma RS-X", price: 110 },
  { brand: "Puma", name: "Puma Suede", price: 70 },
];

const Wishlist = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (name) => {
    setProducts(products.filter(product => product.name !== name));
  };

  const brands = [...new Set(products.map(product => product.brand))];

  return (
    <div>
      <NavBar />
      
      <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center mt-8 mb-8">Your Wishlist</h1>
        {brands.map((brand, brandIndex) => (
          <Card key={brandIndex} className="w-full max-w-3xl mb-6">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-4">
                {brand}
              </Typography>
              <div className="divide-y divide-gray-200">
                {products
                  .filter(product => product.brand === brand)
                  .map(({ name, price }, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                    >
                      <div className="flex items-center gap-x-3">
                        <Avatar size="lg" alt={name} />
                        <div>
                          <Typography color="blue-gray" variant="h6">
                            {name}
                          </Typography>
                          <Typography variant="small" color="gray">
                            ${price}
                          </Typography>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        color="black"
                        onClick={() => handleDelete(name)}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
