"use client";

import { getCartItems, removeFromCart, updateCartQuantity,} from "@/app/actions/actions";
import React, { useEffect, useState } from "react";
import { Product } from "types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "./../sanity/lib/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items || []);
    };

    fetchCartItems();
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(cartItems.filter((item) => item._id !== id));
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, inventory: quantity } : item
      )
    );
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
    const discount = subtotal * 0.2; // 20% discount
    const deliveryFee = 15; // Fixed delivery fee
    const total = subtotal - discount + deliveryFee;
  
    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      deliveryFee: deliveryFee.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully processed",
          "success"
        );
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-2xl p-4">
        {cartItems.length > 0 ? (
          <>
            <div className="flex w-[100%] justify-between gap-10 p-4">
              <div className="w-[50%]">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="card flex gap-32 m-3 hover:bg-gray-100 rounded-xl items-center justify-between border-b p-4"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {item.image && (
                          <Image
                            src={urlFor(item.image).url()}
                            alt="images"
                            className="w-28 h-28 object-cover rounded-md"
                            width={500}
                            height={500}
                          />
                        )}
                        <div className="ml-4">
                          <h2 className="text-lg font-semibold">{item.name}</h2>
                          <p className="text-gray-500 hover:text-gray-400">
                            {item.sizes}
                          </p>
                          <p className="text-gray-600 hover:text-gray-400">
                            ${item.price}
                          </p>
                          <p className="text-gray-600 hover:text-gray-400">
                            {item.colors}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                      <div className="flex items-center">
                        <button
                          className="card px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md hover:font-bold"
                          onClick={() => handleDecrement(item._id)}
                        >
                          -
                        </button>
                        <span className="px-4">{item.inventory}</span>
                        <button
                          className="card px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md hover:font-bold"
                          onClick={() => handleIncrement(item._id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="card text-red-500 hover:font-bold"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[50%] flex flex-col p-4">
                <h2 className="text-black font-bold text-[1.6rem] text-start mb-2">
                  Order Summary
                </h2>
                <div className="">
                    <div className="flex justify-between p-2 w-[100%] mb-2 hover:bg-gray-100 hover:rounded-xl">
                        <p>Subtotal</p>
                        <p>${calculatedTotal().subtotal}</p>
                    </div>
                    <div className="flex justify-between p-2 w-[100%] mb-2 hover:bg-gray-100 hover:rounded-xl">
                        <p>Discount (-20%)</p>
                        <p className="text-red-600">-${calculatedTotal().discount}</p>
                    </div>
                    <div className="flex justify-between p-2 w-[100%] mb-2 hover:bg-gray-100 hover:rounded-xl">
                        <p>Delivery Fee</p>
                        <p>${calculatedTotal().deliveryFee}</p>
                    </div>
                    <hr/>
                    <div className="flex justify-between p-3 w-[100%] mb-2 mt-2 hover:bg-gray-100 hover:rounded-xl">
                        <p>Total:</p>
                        <p>${calculatedTotal().total}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center p-4">
                  <button
                    className="card bg-black hover:bg-slate-800 text-white px-4 py-2 rounded-xl w-[100%]"
                    onClick={handleProceed}
                  >
                    Go to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
