import Link from "next/link"
import ShopProduct from "../../components/productFetched"
import Image from "next/image"
import arrowToRight from "../../../public/images/arrowToRight.png"
import trade from "../../../public/images/trade.png"
import upArrow from "../../../public/images/upArrow.png"
import SlidePrice from "../../components/slidePrice"
import green from "../../../public/images/green.png"
import red from "../../../public/images/red.png"
import yellow from "../../../public/images/yellow.png"
import orange from "../../../public/images/orange.png"
import skyBlue from "../../../public/images/skyblue.png"
import blue from "../../../public/images/blue.png"
import purple from "../../../public/images/purple.png"
import pink from "../../../public/images/pink.png"
import white from "../../../public/images/white.png"
import black from "../../../public/images/black.png" 


const Categories = () => {
  return (
    <div>
        <div className="mt-[140px] md:mt-[150px] w-[100%] px-2 md:px-0 md:w-[85%] m-auto mb-[10rem]">
            <div className="flex mb-[25px] md:mb-[40px] gap-5 items-center">
                <div className="flex items-center gap-2">
                    <Link href={"/"}><p className="font-[400] cursor-pointer text-[16px] hover:text-[#000000] leading-[21.6px] text-[#00000099]">Home</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={"/cart"}><p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Causal</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="w-[100%] md:w-[25%] border rounded-2xl p-3">
                    <div className="flex justify-between mb-[0.5rem] p-2">
                        <div className="text-[23px] font-bold">Filters</div>
                        <Image className="" src={trade} alt="trade"></Image>
                    </div>
                    <hr />
                    <div className="flex justify-between text-[13px] mt-4 p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">T-shirts</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Shorts</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Shirts</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Hoodie</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Jeans</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex justify-between mb-[0.5rem] mt-2 p-2">
                        <div className="text-[23px] font-bold">Price</div>
                        <Image className="w-4 h-6 mt-1" src={upArrow} alt="upArrow"></Image>
                    </div>
                    <SlidePrice />
                    <hr className="mt-4" />
                    <div className="flex justify-between mb-[0.5rem] mt-2 p-2">
                        <div className="text-[23px] font-bold">Colors</div>
                        <Image className="w-4 h-6 mt-1" src={upArrow} alt="upArrow"></Image>
                    </div>
                    <div className="grid grid-cols-5 gap-2 p-2">
                        <Image className="" src={green} alt="green"></Image>
                        <Image className="" src={red} alt="red"></Image>
                        <Image className="" src={yellow} alt="yellow"></Image>
                        <Image className="" src={orange} alt="orange"></Image>
                        <Image className="" src={skyBlue} alt="skyBlue"></Image>
                        <Image className="" src={blue} alt="blue"></Image>
                        <Image className="" src={purple} alt="purple"></Image>
                        <Image className="" src={pink} alt="pink"></Image>
                        <Image className="" src={white} alt="white"></Image>
                        <Image className="" src={black} alt="black"></Image>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex justify-between mb-[0.5rem] mt-2 p-2">
                        <div className="text-[23px] font-bold">Size</div>
                        <Image className="w-4 h-6 mt-1" src={upArrow} alt="upArrow"></Image>
                    </div>
                    <div className="grid grid-cols-2 p-2 gap-1">
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">XX-Small</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">X-Small</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">Small</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">Medium</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">Large</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">X-Large</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">XX-Large</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">3X-Large</button>
                        <button className="pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem] bg-[#ececec] hover:bg-[#e0dede]">4X-Large</button>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex justify-between mb-[0.5rem] mt-2 p-2">
                        <div className="text-[23px] font-bold">Dress Style</div>
                        <Image className="w-4 h-6 mt-1" src={upArrow} alt="upArrow"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] mt-4 p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Casual</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Formal</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Party</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex justify-between text-[13px] p-2 hover:bg-[#e0dede] hover:rounded">
                        <div className="text-[0.9rem]">Gym</div>
                        <Image className="" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                </div>
                <div className="w-full md:w-[75%]">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="text-[25px] md:text-[23px] font-bold pl-2 md:pl-8">Casual</div>
                        <div className="flex gap-2 text-[9px] md:text-[12px] justify-center items-center mt-1 pr-0 md:pr-8">
                            <p className='mt-2'>Showing 1-10 of 100 Products</p>
                            <h2 className="text-[16px] md:text-[23px] font-bold">Casual</h2>
                            <p className='mt-2'>Sort by: Most Popular</p>
                        </div>
                    </div>
                    <div>
                        <ShopProduct />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
