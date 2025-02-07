"use client";
import { useState } from "react";
import Image from "next/image";
import Left from "../../public/images/arrow-left.png";
import Right from "../../public/images/arrow-right.png";
import ViewReview from "@/components/viewReview";

const CustomerReviewSlider = () => {
  const [page, setPage] = useState(0);
  const reviewsPerPage = 2;
  const totalReviews = 10;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const nextPage = () => {
    if ((page + 1) * reviewsPerPage < totalReviews) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="mb-[100px]">
      <div className="w-[90%] mt-[50px] m-auto flex justify-between items-center">
        <h1 className="integral text-[#000000] text-[45px] mt-[40px] leading-[57.6px] font-bold">
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
            className={`cursor-pointer ${
              (page + 1) * reviewsPerPage >= totalReviews ? "opacity-50" : ""
            }`}
            src={Right}
            alt="right"
            onClick={nextPage}
          />
        </div>
      </div>
      <div className="mt-[30px] flex gap-5 pl-20 pr-20">
        {/* Make sure ViewReview uses the correct page and limit */}
        <ViewReview limit={reviewsPerPage} page={page} />
      </div>
      <div className="flex justify-center mt-5 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
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
    </div>
  );
};

export default CustomerReviewSlider;

