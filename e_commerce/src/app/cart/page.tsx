import Image from "next/image"
import Link from "next/link"
import arrowToRight from "../../../public/images/arrowToRight.png"
import CartPage from "@/components/cartPage"

const Cart = () => {
  return (
    <div className="w-full">
        <div className="mt-[160px] w-[85%] m-auto mb-[10rem]">
            <div className="flex mb-[40px] gap-5 items-center">
                <div className="flex items-center gap-2">
                    <Link href={"/"}><p className="font-[400] cursor-pointer text-[16px] hover:text-[#000000] leading-[21.6px] text-[#00000099]">Home</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={"/cart"}><p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Cart</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
            </div>
            <h1 className="integral text-[30px] font-bold mb-4">YOUR CART</h1>
            <CartPage/>
        </div>
    </div>
  )
}

export default Cart
