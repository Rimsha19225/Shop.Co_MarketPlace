"use client"
import Image from "next/image"
import sub from "../../public/images/subtract.png"
import add from "../../public/images/addition.png"
import { useState } from "react"

const Button = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      <div className="flex gap-5">
        <button className="flex justify-around w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] text-[1.2rem] items-center">
          <Image onClick={()=>{if(count>=1){setCount(count - 1)}}} src={sub} alt="subtraction"/>
            {count}
          <Image onClick={()=>{if(count<=9){setCount(count + 1)}}} src={add} alt="addition"/>
        </button>
        <button className="card satoshi bg-[#000000] rounded-[62px] w-[400px] h-[52px] text-[#FFFFFF] text-[16px] leading-[21.6px] font-[500] active:bg-[#575656] active:text-[black]">Add to Cart</button>
      </div>
    </div>
  )
}

export default Button