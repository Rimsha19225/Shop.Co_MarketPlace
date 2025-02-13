"use client";

import Image from "next/image";
import { useState } from "react";
import pulldown from "../../public/images/pulldown.png";

export default function OptionButton() {
  const [options] = useState(["Latest", "Previous"]);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Button to toggle dropdown */}
      <button
        className="px-4 py-2 text-black flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Option
        <Image src={pulldown} alt="Dropdown" width={20} height={20} className="w-4" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Display selected option */}
      {selected && <p className="mt-2">Selected: {selected}</p>}
    </div>
  );
}