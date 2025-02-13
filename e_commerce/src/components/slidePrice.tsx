"use client";
import { useState } from "react";

const SlidePrice = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(5000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) setMaxPrice(value);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full max-w-md">
      

      <div className="relative w-full">
        {/* Background Track */}
        <div className="absolute w-full h-2 bg-black rounded-full">

        {/* Dynamic Range Highlight */}
        <div
          className="absolute h-2 bg-black rounded-full"
          style={{
            left: `${(minPrice / 5000) * 100}%`,
            right: `${100 - (maxPrice / 5000) * 100}%`,
          }}
        ></div>
        </div>

        {/* Min Slider */}
        <input
          type="range"
          min={0}
          max={5000}
          step={10}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto"
        />

        {/* Max Slider */}
        <input
          type="range"
          min={0}
          max={5000}
          step={10}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto"
        />
      </div>
      <label className="font-semibold text-lg mt-2">
        Price: ${minPrice} - ${maxPrice}
      </label>
    </div>
  );
};

export default SlidePrice;