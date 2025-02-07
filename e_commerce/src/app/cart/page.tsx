import Image from "next/image"
import Link from "next/link"
import arrowToRight from "../../../public/images/arrowToRight.png"
import Footer from "@/components/footer"
import cart1 from '../../../public/images/shirt22.png'
import cart2 from '../../../public/images/Frame 34.png'
import cart3 from '../../../public/images/Frame 33.png'
import delete_icon from "../../../public/images/delete.png"
import pricetag from "../../../public/images/pricetag.png"
import arrow from "../../../public/images/rightArrow.png"
import Button from "@/components/button"

const Cart = () => {
  return (
    <div className="w-full">
        <div className="mt-[180px] w-[85%] m-auto mb-[10rem]">
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
            <div className="flex gap-6">
                <div className="flex flex-col border rounded-2xl p-2">
                    <div className="flex mb-3 p-2 pl-2 pr-2 hover:bg-[#f0eeee] rounded-2xl">
                        <Image src={cart1} alt="cart_1" className="w-[6rem] h-[6rem] rounded-[0.5rem]"/>
                        <div className="satoshi ml-3 w-[12rem]">
                            <h2 className="text-[17px] font-semibold">Gradient Graphic T-shirt</h2>
                            <p className="text-[12px] text-[#303030]"><span className="font-semibold">Size: </span>Large</p>
                            <p className="text-[12px] mb-[0.25rem] text-[#303030]"><span className="font-semibold">Color: </span>White</p>
                            <p className="text-[18px] leading-[32.4px] font-[700]">$145</p>
                        </div>
                        <div className="ml-[15rem]">
                            <Image src={delete_icon} alt="delete" className="shake ml-[5.5rem]"/>
                            <div className="ml-[1rem]"><Button /></div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex mt-3 mb-3 p-2 pl-2 pr-2 hover:bg-[#f0eeee] rounded-2xl">
                        <Image src={cart2} alt="cart_1" className="w-[6rem] h-[6rem] rounded-[0.5rem]"/>
                        <div className="satoshi ml-3 w-[12rem]">
                            <h2 className="text-[17px] font-semibold">Checkered Shirt</h2>
                            <p className="text-[12px] text-[#303030]"><span className="font-semibold">Size: </span>Medium</p>
                            <p className="text-[12px] text-[#303030]"><span className="font-semibold">Color: </span>Red</p>
                            <p className="text-[18px] leading-[32.4px] font-[700]">$180</p>
                        </div>
                        <div className="ml-[15rem]">
                            <Image src={delete_icon} alt="delete" className="shake ml-[5.5rem]"/>
                            <div className="ml-[1rem]"><Button /></div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex mt-3 p-2 pl-2 pr-2 hover:bg-[#f0eeee] rounded-2xl">
                        <Image src={cart3} alt="cart_1" className="w-[6rem] h-[6rem] rounded-[0.5rem]"/>
                        <div className="satoshi ml-3 w-[12rem]">
                            <h2 className="text-[17px] font-semibold">Skiny Fit Jeans</h2>
                            <p className="text-[12px] text-[#303030]"><span className="font-semibold">Size: </span>Large</p>
                            <p className="text-[12px] text-[#303030]"><span className="font-semibold">Color: </span>Blue</p>
                            <p className="text-[18px] leading-[32.4px] font-[700]">$240</p>
                        </div>
                        <div className="ml-[15rem]">
                            <Image src={delete_icon} alt="delete" className="shake ml-[5.5rem]"/>
                            <div className="ml-[1rem]"><Button /></div>
                        </div>
                    </div>
                </div>
                <div className="satoshi flex flex-col border rounded-2xl p-2 w-[37rem] h-[24rem]">
                    <h2 className="text-[22px] font-semibold mb-4">Order Summary</h2>
                    <div className="flex mb-[0.4rem] p-1 pl-2 pr-2 hover:bg-[#f0eeee] rounded-xl">
                        <h2 className="text-[#484747]">Subtotal</h2>
                        <p className="text-[17px] font-bold ml-[28rem]">$565</p>
                    </div>
                    <div className="flex mb-[0.4rem] p-1 pl-2 pr-2 hover:bg-[#f0eeee] rounded-xl">
                        <h2 className="text-[#484747]">Discount (-20%)</h2>
                        <p className="text-[#FF3333] text-[17px] font-bold ml-[24.2rem]">-$113</p>
                    </div>
                    <div className="flex mb-[0.4rem] p-1 pl-2 pr-2 hover:bg-[#f0eeee] rounded-xl">
                        <h2 className="text-[#484747]">Delivery Fee</h2>
                        <p className="text-[17px] font-bold ml-[26.8rem]">$15</p>
                    </div>
                    <hr />
                    <div className="flex mt-[0.4rem] p-1 pl-2 pr-2 hover:bg-[#f0eeee] rounded-xl">
                        <h2 className="text-[#484747]">Total</h2>
                        <p className="text-[17px] font-bold ml-[29.5rem]">$467</p>
                    </div>
                    <div className="flex gap-3">
                    <div className="relative ml-[15px] w-[26rem] mt-[1rem] pt-[0.1rem] rounded-full">
                        <input type="text" placeholder="Add promo code" className=" p-[0.75rem] pl-12 w-full border-none text-[15px] rounded-full bg-[#F5F5F5] hover:bg-[#e4e4e4] text-black" />
                        <span className="absolute inset-y-0 left-4 flex items-center pt-[0rem] cursor-pointer">
                            <Image src={pricetag} alt='price_tag'/>
                        </span>
                    </div>
                    <button className="text-[15px] w-[7rem] h-[2.7rem] bg-black text-white hover:bg-[#4d4d4d] mt-[1rem] pt-[0.1rem] rounded-full">Apply</button>
                </div>
                <div className="card relative ml-[15px] w-[33.5rem] mt-[1.5rem] pt-[0.1rem] p-3 rounded-full bg-[#000000] hover:bg-[#4d4d4d] flex items-center">
                        <button className="text-[white] pl-[11rem] pt-[0.7rem]">Go to Checkout</button>
                        <span className="absolute inset-y-0 left-4 flex items-center pt-[0rem] cursor-pointer">
                            <Image src={arrow} alt='arrow' className="ml-[19rem]"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart
