"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

const ShopProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        const updatedProducts = fetchedProducts.map((product) => {
          const randomDiscount = Math.random() < 0.8 ? Math.floor(Math.random() * 31) + 10 : 0;
          const discountedPrice = randomDiscount ? product.price * (1 - randomDiscount / 100) : product.price;

          return {
            ...product,
            rating: product.rating || parseFloat((Math.random() * 5).toFixed(1)),
            discountPercent: randomDiscount,
            discountedPrice: parseFloat(discountedPrice.toFixed(2)),
          };
        });
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent unintended navigation
    Swal.fire({
      position: "center",
      icon : "success",
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1000
    })
    addToCart(product);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const renderStars = (rating = 0) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return (
      <div className="flex items-center space-x-1">
        {stars}
        <span className="text-sm text-gray-500 ml-2">{rating.toFixed(1)}/5</span>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <div key={product._id} className="card p-4 border rounded-lg bg-white shadow-md">
            <Link href={`/product/${product.slug.current}`}>
            {product.image && urlFor(product.image)?.url() && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg w-full h-56 object-cover"
              />
            )}
            <h2 className="satoshi1 text-lg font-bold mt-4">{product.name}</h2>
            </Link>
            {renderStars(product.rating)}
            <div className="mt-2">
              {product.discountPercent > 0 ? (
                <div className="flex items-center space-x-2">
                  <p className="text-red-500 font-bold">${product.discountedPrice}</p>
                  <p className="line-through text-gray-400">${product.price}</p>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-2xl">
                    {product.discountPercent}% OFF
                  </span>
                </div>
              ) : (
                <p className="satoshi1 text-gray-800 text-[1.2rem]">${product.price}</p>
              )}
            </div>
            <div className="mt-4">
              <button className="bg-gradient-to-r from-black to-gray-300 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out" onClick={(e) => handleAddToCart(e, product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-14 w-full" />

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1 ? "bg-black text-white" : "border hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}


          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopProduct;