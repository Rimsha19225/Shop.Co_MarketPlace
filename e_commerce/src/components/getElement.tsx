// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { Product } from "../../types/products";
// import { client } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/lib/queries";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import sub from "../../public/images/minus.png"
// import add from "../../public/images/plus.png"

// const GetElement = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const detailsRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProducts);
//         const updatedProducts = fetchedProducts.map((product) => {
//           const randomDiscount = Math.random() < 0.8 ? Math.floor(Math.random() * 31) + 10 : 0;
//           const discountedPrice = randomDiscount ? product.price * (1 - randomDiscount / 100) : product.price;

//           return {
//             ...product,
//             rating: product.rating || parseFloat((Math.random() * 5).toFixed(1)),
//             discountPercent: randomDiscount,
//             discountedPrice: parseFloat(discountedPrice.toFixed(2)), // Ensure this is a number
//           };
//         });
//         setProducts(updatedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//     setTimeout(() => {
//       detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 100);
//   };

//   const renderStars = (rating = 0) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(<FaStar key={i} className="text-yellow-500" />);
//       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-gray-400" />);
//       }
//     }
//     return (
//       <div className="flex items-center space-x-1">
//         {stars}
//         <span className="text-sm text-gray-500 ml-2">{rating.toFixed(1)}/5</span>
//       </div>
//     );
//   };

//   const [count, setCount] = useState(0)

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-3 gap-8">
//       </div>

//       <hr className="mt-14 w-full" />

// {selectedProduct && (
//         <div ref={detailsRef} className="mt-8 p-4 border rounded-lg shadow-lg">
//           <div className="w-[100%] flex gap-8 p-4">
//           {selectedProduct.image && urlFor(selectedProduct.image)?.url() && (
//             <Image
//                 src={urlFor(selectedProduct.image).url()}
//                 alt={selectedProduct.name}
//                 width={200}
//                 height={200}
//                 className="rounded-lg w-[30rem] h-[32rem] object-cover"
//             />
//           )}
//           <div>
//             <h2 className='integral text-[2.3rem] font-semibold'>{selectedProduct.name}</h2>
//             {renderStars(selectedProduct.rating)}
//             <div className="mt-2">
//               {selectedProduct.discountPercent > 0 ? (
//                 <div className="flex text-[2rem] items-center space-x-2">
//                   <p className="text-red-500 font-bold">${selectedProduct.discountedPrice}</p>
//                   <p className="line-through text-gray-400">${selectedProduct.price}</p>
//                   <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-2xl">
//                     {selectedProduct.discountPercent}% OFF
//                   </span>
//                 </div>
//               ) : (
//                 <p className="satoshi1 text-gray-800 text-[1.2rem]">${selectedProduct.price}</p>
//               )}
//             </div>
//             <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
//             <hr className='w-full mt-3' />
//             <div className="flex flex-col mt-3">
//               <span className="text-gray-600 text-[1.1rem]">Select Colors</span>
//               <div className="flex gap-2 mt-1">
//                 {selectedProduct.colors.map((size) => (
//                   <button
//                     key={size}
//                     className="px-4 py-1 bg-gray-200 text-gray-800 w-[5rem] rounded-[1rem] hover:bg-gray-300 transition-all"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <hr className='w-full mt-3' />
//             <div className="flex flex-col mt-3">
//               <span className="text-gray-600 text-[1.1rem]">Choose Sizes:</span>
//               <div className="flex gap-2 mt-1">
//                 {selectedProduct.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className="px-4 py-1 bg-gray-200 text-gray-800 w-[4rem] rounded-[1rem] hover:bg-gray-300 transition-all"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <hr className='w-full mt-3 mb-4' />
//             <div className="flex gap-5">
//                     <button className="flex justify-around w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] text-[1.2rem] items-center">
//                       <Image onClick={()=>{if(count>=1){setCount(count - 1)}}} src={sub} alt="subtraction"/>
//                         {count}
//                       <Image onClick={()=>{if(count<=9){setCount(count + 1)}}} src={add} alt="addition"/>
//                     </button>
//                     <button className="card satoshi bg-[#000000] rounded-[62px] w-[400px] h-[52px] text-[#FFFFFF] text-[16px] leading-[21.6px] font-[500] active:bg-[#575656] active:text-[black]">Add to Cart</button>
//                 </div>
//           </div>
//         </div>
//         </div>
//       )}


//     </div>
//   );
// };

// export default GetElement;
