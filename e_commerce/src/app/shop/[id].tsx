"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { singleProductQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import sub from "../../../public/images/minus.png";
import add from "../../../public/images/plus.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product = await client.fetch(singleProductQuery, { id });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="w-full flex gap-8 p-4">
        {product.image && urlFor(product.image)?.url() && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg w-[30rem] h-[32rem] object-cover"
          />
        )}
        <div>
          <h2 className="integral text-[2.3rem] font-semibold">{product.name}</h2>
          <div>{renderStars(product.rating)}</div>
          <div className="mt-2">
            {product.discountPercent > 0 ? (
              <div className="flex text-[2rem] items-center space-x-2">
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
          <p className="text-gray-700 mt-2">{product.description}</p>
          <hr className="w-full mt-3" />
          <div className="flex gap-5">
            <button className="flex justify-around w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] text-[1.2rem] items-center">
              <Image onClick={() => setCount(Math.max(1, count - 1))} src={sub} alt="subtract" />
              {count}
              <Image onClick={() => setCount(count + 1)} src={add} alt="add" />
            </button>
            <button className="card satoshi bg-[#000000] rounded-[62px] w-[400px] h-[52px] text-[#FFFFFF] text-[16px] font-[500]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStars = (rating = 0) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < Math.floor(rating)) return <FaStar key={i} className="text-yellow-500" />;
        if (i === Math.floor(rating) && rating % 1 !== 0) return <FaStarHalfAlt key={i} className="text-yellow-500" />;
        return <FaRegStar key={i} className="text-gray-400" />;
      })}
      <span className="text-sm text-gray-500 ml-2">{rating.toFixed(1)}/5</span>
    </div>
  );
};

export default ProductDetails;
