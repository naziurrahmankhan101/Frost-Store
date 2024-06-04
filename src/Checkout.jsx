import React from "react";
import { Button } from "@material-tailwind/react";
import NavBar from "./NavBar";

const Checkout = () => {
  const items = [
    { id: 1, name: "Nike T-shirt", price: 44.00, quantity: 1, image: "./nike-logo.svg" },
    { id: 2, name: "Adidas Boots", price: 54.00, quantity: 1, image: "./adidas-logo.svg" },
    { id: 3, name: "Puma Football", price: 32.00, quantity: 1, image: "./puma-logo.svg" },
  ];

  const shippingCost = 5.00;
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost;

  return (
    <div className="bg-gray-100">
      <NavBar /> {/* Ensure NavBar is at the top */}
      <div className="container mx-auto px-4 pt-6"> {/* Add padding top to content area */}
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">     
          <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
          
          {/* Order Summary */}
          <div className="bg-gray-200 p-4 mb-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            <div>
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 mx-4">
                    <h3 className="text-lg">{item.name}</h3>
                    <p>€{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="px-2">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="px-2">+</button>
                  </div>
                  <p className="w-16 text-right">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span>Shipping</span>
              <span>€{shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2 text-lg font-bold">
              <span>Total Price</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Billing and Shipping Information */}
          <form className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Billing and Shipping Information</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="input w-full p-2 border rounded" />
              <input type="text" placeholder="Address" className="input w-full p-2 border rounded" />
              <input type="text" placeholder="City" className="input w-full p-2 border rounded" />
              <input type="text" placeholder="Postal Code" className="input w-full p-2 border rounded" />
              <input type="text" placeholder="Country" className="input w-full p-2 border rounded" />
            </div>
            <div className="flex justify-between mt-6">
              <Button color="black" ripple="light">
                Add Card
              </Button>
            </div>
          </form>

          {/* Order Review */}
          <div className="bg-gray-200 p-4 mb-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Order Review</h2>
            <p>Review your order details before placing the order.</p>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center">
            <Button color="black" ripple="light">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
