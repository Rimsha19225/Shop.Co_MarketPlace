"use client";
import { useState } from "react";
import Image from "next/image";
import Left from "../../public/images/arrow-left.png";
import Right from "../../public/images/arrow-right.png";
import ViewReview from "@/components/viewReview";

const CustomerReviewSlider = () => {
  const [page, setPage] = useState(0);
  const reviewsPerPage1 = 2;
  const reviewsPerPage2 = 1;
  const totalReviews = 10;
  const totalPages1 = Math.ceil(totalReviews / reviewsPerPage1);
  const totalPages2 = Math.ceil(totalReviews / reviewsPerPage2);

  const nextPage1 = () => {
    if ((page + 1) * reviewsPerPage1 < totalReviews) {
      setPage(page + 1);
    }
  };

  const nextPage2 = () => {
    if ((page + 1) * reviewsPerPage2 < totalReviews) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="mb-[150px] md:mb-[250px]">
      <div className="w-[90%] mt-[50px] m-auto px-3 md:px-0 flex justify-between items-center">
        <h1 className="integral text-[#000000] text-[30px] md:text-[45px] mt-[40px]leading-[30px] md:leading-[57.6px] font-bold">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4">
          <Image
            className={`cursor-pointer ${page === 0 ? "opacity-50" : ""}`}
            src={Left}
            alt="left"
            onClick={prevPage}
          />
          <Image
            className={`hidden md:block cursor-pointer ${
              (page + 1) * reviewsPerPage1 >= totalReviews ? "opacity-50" : ""
            }`}
            src={Right}
            alt="right"
            onClick={nextPage1}
          />

          <Image
            className={`md:hidden block cursor-pointer ${
              (page + 1) * reviewsPerPage1 >= totalReviews ? "opacity-50" : ""
            }`}
            src={Right}
            alt="right"
            onClick={nextPage2}
          />
        </div>
      </div>
      <div className="hidden mt-[30px] md:flex gap-5 pl-20 pr-20">
        {/* Make sure ViewReview uses the correct page and limit */}
        <ViewReview limit={reviewsPerPage1} page={page} />
      </div>
      <div className="md:hidden mt-[30px] flex gap-5 w-[100%] px-3">
        {/* Make sure ViewReview uses the correct page and limit */}
        <ViewReview limit={reviewsPerPage2} page={page} />
      </div>
      <div className="hidden md:flex justify-center mt-5 gap-2">
        {Array.from({ length: totalPages1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-4 py-2 rounded-lg ${
              page === i ? "bg-black text-white" : "border hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-5 px-2 justify-center mt-5 gap-2">
        {Array.from({ length: totalPages2 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-2 py-2 rounded-lg ${
              page === i ? "bg-black text-white" : "border hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewSlider;