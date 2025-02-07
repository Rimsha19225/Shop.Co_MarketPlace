import { groq } from "next-sanity";



// export const allProducts = groq`*[_type == "products"]`;
export const four = groq`*[_type == "products"][0..3]`;

export const allProducts = `*[_type == "products"]{
    _id,
    name,
    price,
    description,
    slug,
    image,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    rating
  }`;

  export const singleProductQuery = `*[_type == "product" && _id == $id][0]`;