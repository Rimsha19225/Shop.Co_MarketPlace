"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "@/components/button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    if (slugString) {
      fetchProduct(slugString);
    }
  }, [slugString]);
  
  const fetchProduct = async (slugValue: string) => {
    try {
      const decodedSlug = decodeURIComponent(slugValue);
  
      const fetchedProduct: Product = await client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{
          _id,
          name,
          price,
          description,
          slug,
          image,
          category,
          discountPercent,
          colors,
          sizes,
          rating,
          _type,
        }`,
        { slug: decodedSlug }
      );
  
      setProduct(fetchedProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  //   if (slug) {
  //     fetchProduct();
  //   }
  // }, [slug]);
  

  if (loading) {
    return <div className="mt-10 text-red-900 text-center py-10">Loading...</div>;
  }

  const renderStars = (rating: number | null | undefined) => { 
    const safeRating = rating ?? 0; // Default to 0 if null or undefined
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(safeRating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(safeRating) && safeRating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
  
    return (
      <div className="flex items-center space-x-1">
        {stars}
        <span className="text-sm text-gray-500 ml-2">{safeRating.toFixed(1)}/5</span>
      </div>
    );
  };
  
  


  return (
    <div className="container mx-auto mt-32 md:mt-36 mb-48 md:mb-60">
      <div className="w-full flex flex-col md:flex-row gap-8 p-4">
      {product?.image && (
  <Image
    src={urlFor(product.image).url()}
    alt={product?.name || "Product Image"}
    width={200}
    height={200}
    className="rounded-lg w-[100%] md:w-[30rem] md:h-[32rem] object-cover"
  />
)}
        <div>
          <h2 className="integral text-[1.2rem] md:text-[2.3rem] font-semibold">{product?.name}</h2>
          {renderStars(product?.rating)}
          <p className="text-gray-700 mt-2">{product?.description}</p>
          <hr className="w-full mt-3" />
          <div className="flex flex-col mt-3">
            <span className="text-gray-600 text-[1.1rem]">Select Colors</span>
            <div className="flex gap-2 mt-1">
              {product?.colors?.map((color) => (
                <button
                  key={color}
                  className="px-4 py-1 bg-gray-200 text-gray-800 w-[5rem] rounded-[1rem] hover:bg-gray-300 transition-all"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <hr className="w-full mt-3" />
          <div className="flex flex-col mt-3">
            <span className="text-gray-600 text-[1.1rem]">Choose Sizes:</span>
            <div className="flex gap-2 mt-1">
              {product?.sizes?.map((size) => (
                <button
                  key={size}
                  className="px-4 py-1 bg-gray-200 text-gray-800 w-[4rem] rounded-[1rem] hover:bg-gray-300 transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="w-full mt-3 mb-4" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;