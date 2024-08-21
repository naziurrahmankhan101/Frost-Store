import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export function Purchase() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    { name: 'Hard taco, chicken', price: 2.50, quantity: 3 },
    { name: 'Hard taco, beef', price: 2.75, quantity: 3 },
    { name: 'Curly fries', price: 1.75, quantity: 1 },
    { name: 'Large soda', price: 2.00, quantity: 2 },
  ]);
  const [total, setTotal] = useState(21.50);

  const handleOpen = () => setOpen((cur) => !cur);

  const handleAddProduct = () => {
    setProducts([...products, { name: '', price: 0, quantity: 1 }]);
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    calculateTotal(newProducts);
  };

  const handleProductChange = (index, key, value) => {
    const newProducts = products.map((product, i) =>
      i === index ? { ...product, [key]: value } : product
    );
    setProducts(newProducts);
    calculateTotal(newProducts);
  };

  const calculateTotal = (products) => {
    const newTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  };

  const calculateDiscount = (total) => {
    return total >= 20 ? total * 0.2 : 0;
  };

  const discount = calculateDiscount(total);
  const serviceFee = 0.50;
  const deliveryFee = 4.00;
  const finalTotal = total - discount + serviceFee + deliveryFee;

  return (
    <>
      <button onClick={handleOpen} className="py-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] dark:bg-gray-50 dark:text-gray-800">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Order items
            </Typography>
            <ul className="flex flex-col pt-4 space-y-2">
              {products.map((product, index) => (
                <li key={index} className="flex items-start justify-between">
                  <div>
                    <h3>{product.name}
                      <span className="text-sm dark:text-violet-600">x{product.quantity}</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block">${(product.price * product.quantity).toFixed(2)}</span>
                    <span className="text-sm dark:text-gray-600">à ${product.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2">
              <div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mt-1 fill-current dark:text-violet-600">
                    <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                    <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                  </svg>
                  <span className="dark:text-gray-600">Spend $20.00, get 20% off</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-violet-600">How do our fees work?</a>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">${finalTotal.toFixed(2)}</span>
                </div>
                <Button variant="gradient" onClick={() => alert('Proceeding to payment...')} fullWidth>
                  Go to checkout
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
