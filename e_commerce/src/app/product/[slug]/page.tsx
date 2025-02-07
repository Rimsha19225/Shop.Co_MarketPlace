import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "@/components/button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
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
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const discountedPrice =
    product.discountPercent > 0
      ? (product.price * (100 - product.discountPercent)) / 100
      : product.price;

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
    <div>
      <div className="w-full flex gap-8 p-4">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg w-[30rem] h-[32rem] object-cover"
          />
        )}
        <div>
          <h2 className="integral text-[2.3rem] font-semibold">{product.name}</h2>
          {renderStars(product.rating)}
          <div className="mt-2">
            {product.discountPercent > 0 ? (
              <div className="flex text-[2rem] items-center space-x-2">
                <p className="text-red-500 font-bold">${discountedPrice.toFixed(2)}</p>
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
          <div className="flex flex-col mt-3">
            <span className="text-gray-600 text-[1.1rem]">Select Colors</span>
            <div className="flex gap-2 mt-1">
              {product.colors.map((color) => (
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
              {product.sizes.map((size) => (
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
 )};
