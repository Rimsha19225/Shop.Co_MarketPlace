"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const CountReview = () => {
    const [reviewCount, setReviewCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const count = await client.fetch<number>(
          `count(*[_type == "review"])`
        );
        setReviewCount(count);
      } catch (error) {
        console.error("Error fetching review count:", error);
      }
    };

    fetchReviewCount();
  }, []);


  return (
    <div className="flex gap-2 items-center">
      <h3 className="text-[#000000] text-[24px] font-[700] leading-[32.4px]">
        All Reviews
      </h3>
      <p className="text-[#00000099] mt-[5px] text-[16px] font-[400] leading-[22px]">
        ({reviewCount !== null ? reviewCount : "Loading..."})
      </p>
    </div>
  )
}

export default CountReview