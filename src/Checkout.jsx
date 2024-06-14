import React from "react";
import NavBar from "./NavBar";

const Checkout = () => {
  return (
    <section className="py-12 bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shopping Cart</h2>
              <p className="text-sm text-gray-500 mb-6">You are eligible for Free Shipping.</p>
              
              <div className="border-b pb-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src="link-to-pink-blouse-image" alt="Pink Blouse" className="w-24 h-24 object-cover rounded-lg" />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Pink Blouse</h4>
                      <p className="text-sm text-gray-500">Silk</p>
                      <p className="text-sm text-gray-500">Size: XS</p>
                      <p className="text-sm text-green-500">In Stock</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">$1,300</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="link-to-premium-suit-image" alt="Premium Suit" className="w-24 h-24 object-cover rounded-lg" />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Premium Suit</h4>
                      <p className="text-sm text-gray-500">Linen</p>
                      <p className="text-sm text-gray-500">Size: M</p>
                      <p className="text-sm text-green-500">In Stock</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">$700</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>Subtotal</span>
                <span>$2,090</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>Shipping Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-700 mb-6">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="ml-2 bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  APPLY
                </button>
              </div>
              <div className="flex justify-between text-xl font-semibold text-gray-900 mb-6">
                <span>Total</span>
                <span>$2,090</span>
              </div>
              <button className="w-full bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
                CHECKOUT
              </button>
              <button className="w-full bg-gray-300 text-gray-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                CONTINUE
              </button>
              <p className="text-xs text-gray-500 mt-4">Tax included. Shipping calculated at checkout.</p>
              <p className="text-xs text-gray-500 mt-4">
                <i className="fas fa-lock mr-2"></i>
                Secured Payment by Paddle with:
              </p>
              <div className="mt-2 flex items-center">
                <img src="link-to-visa-logo" alt="Visa" className="h-6 mr-2" />
                <img src="link-to-mastercard-logo" alt="MasterCard" className="h-6 mr-2" />
                <img src="link-to-amex-logo" alt="American Express" className="h-6 mr-2" />
                <img src="link-to-paypal-logo" alt="PayPal" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
