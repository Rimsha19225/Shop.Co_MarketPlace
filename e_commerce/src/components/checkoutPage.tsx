"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Product } from "types/products";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const countries: Record<string, string[]> = {
  Pakistan: [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ],
  USA: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
  UK: [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Glasgow",
    "Liverpool",
    "Newcastle",
    "Sheffield",
    "Bristol",
    "Nottingham",
  ],
  Canada: [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "Winnipeg",
    "Quebec City",
    "Hamilton",
    "Kitchener",
  ],
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    addressLine2: false,
    zipCode: false,
    city: false,
    country: false,
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      const cartItems: Product[] = JSON.parse(storedCart);
      const updatedCartItems = cartItems.map((item: Product) => ({
        ...item,
        _key: item._key || generateUniqueKey(), // Ensure each item has a _key
      }));
      
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Save updated keys
    }
  }, []);
  
  const generateUniqueKey = (): string => {
    return Math.random().toString(36).slice(2, 11); // Use slice instead of substr
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      addressLine2: !formValues.addressLine2,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
      country: !formValues.country,
    };

    setFormErrors(error);

    return !Object.values(error).includes(true); // ✅ Returns true if no errors exist
  };



  const handlePlaceOrder = async () => {
    if (validateForm()) {
      const orderData = {
        _type: "order",
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        addressLine2: formValues.addressLine2,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        country: formValues.country,
        cartItems: cartItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
          _key: item._key || generateUniqueKey(),
        })),
        total: calculatedTotal().total,
        orderDate: new Date().toISOString(),
      };
  
      try {
        await client.create(orderData);
        localStorage.removeItem("appliedDiscount");
        Swal.fire("Order Placed!", "Your order has been placed successfully.", "success");
      } catch (error) {
        console.error("Failed to place order", error);
        Swal.fire("Error!", "Failed to place order.", "error");
      }
    } else {
      Swal.fire("Error!", "Please fill all required fields.", "error");
    }
  };
  

  return (
    <div className="w-full min-h-screen bg-grey-50">
      <div className="mt-0 md:mt-6">
        <div className="max-w-[82rem] m-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="satoshi text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span className="satoshi">CheckOut</span>
          </nav>
        </div>
      </div>
      <h2 className="hidden md:block integral max-w-[82rem] m-auto px-3 md:px-6 lg:px-8 text-[1.8rem] font-semibold mt-1 md:mt-3">
        Order Summary
      </h2>
      <div className="max-w-[82rem] mx-auto px-3 md:px-4 mt-[-2rem] sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 bg-white rounded-lg p-3 md:p-6 space-y-6">
          <h2 className="block md:hiddenintegral max-w-[82rem] m-auto px-1 md:px-6 lg:px-8 text-[1.8rem] font-semibold mt-1 md:mt-3">
        Order Summary
      </h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="card rounded-xl p-2 hover:bg-gray-100 flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                    <p>${item.price * item.inventory}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in cart</p>
            )}
            <div>
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
              <hr />
              <div className="flex justify-between p-3 mt-2 w-[100%] mb-2 hover:bg-gray-100 hover:rounded-xl">
                <p>Total:</p>
                <p>${calculatedTotal().total}</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="satoshi1 text-[1.5rem] font-semibold mb-4">
              Billing Information
            </h2>
            <div className="flex flex-col px-2 gap-2 font-semibold">
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border p-2 rounded-xl"
                  value={formValues.firstName}
                  placeholder="Enter Your first Name"
                  onChange={handleInputChange}
                />
                {formErrors.firstName && <p className="text-red-500">First Name is Required!</p>}
              </div>
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-4">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border p-2 rounded-xl"
                  value={formValues.lastName}
                  placeholder="Enter Your last Name"
                  onChange={handleInputChange}
                />
                {formErrors.lastName && <p className="text-red-500">Last Name is Required!</p>}
              </div>
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-4">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  className="border p-2 rounded-xl"
                  value={formValues.email}
                  placeholder="Enter Your email"
                  onChange={handleInputChange}
                />
                {formErrors.email && <p className="text-red-500">Email is Required!</p>}
              </div>
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-4">
                  Address
                </label>
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    id="address"
                    className="border p-2 rounded-xl"
                    value={formValues.address}
                    placeholder="Address Line 1"
                    onChange={handleInputChange}
                  />
                </div>
                {formErrors.address && <p className="text-red-500">Address is Required!</p>}
              </div>
              <div className="px-0 md:px-2 font-semibold">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    id="addressLine2"
                    className="border p-2 rounded-xl"
                    value={formValues.addressLine2}
                    placeholder="Address Line 2"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-4">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="border p-2 rounded-xl"
                  value={formValues.zipCode}
                  placeholder="Zip Code"
                  onChange={handleInputChange}
                />
                {formErrors.zipCode && <p className="text-red-500">Zip Code is Required!</p>}
              </div>
              <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
                <label className="text-[1rem] text-gray-700 mt-4">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="border p-2 rounded-xl"
                  value={formValues.phone}
                  placeholder="Phone No."
                  onChange={handleInputChange}
                />
                {formErrors.phone && <p className="text-red-500">Phone No. is Required!</p>}
              </div>
              <label className="text-[1rem] text-gray-700 mt-4">Country</label>
              <select
                id="country"
                value={formValues.country}
                onChange={handleInputChange}
                className="border p-2 rounded-xl"
              >
                <option value="">Select Country</option>
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formErrors.country && <p className="text-red-500">Country is Required!</p>}
            </div>
            <div className="flex flex-col px-0 md:px-2 gap-2 font-semibold">
              <label className="text-[1rem] text-gray-700 mt-4">City</label>
              <select
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                className="border p-2 rounded-xl"
              >
                <option value="" className="text-gray-200">
                  Select City
                </option>
                {formValues.country &&
                  countries[formValues.country].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              {formErrors.city && <p className="text-red-500">City is Required!</p>}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-8 w-full bg-black text-white py-4 rounded-full md:card"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
