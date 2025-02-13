import Image from "next/image"
import arrowToRight from "../../../public/images/arrowToRight.png"
import filter from "../../../public/images/filter.png"
import OptionButton from "../../components/reviewDropdown"
import card1 from '../../../public/images/shirt11.png'
import card2 from '../../../public/images/shirt22.png'
import card3 from '../../../public/images/shirt33.png'
import card4 from '../../../public/images/shirt44.png'
import m1 from '../../../public/images/fourrr.png'
import m2 from '../../../public/images/m2.png'
import m3 from '../../../public/images/m3.png'
import m4 from '../../../public/images/fiveee.png'
import Link from "next/link"
import ViewReview from "@/components/viewReview"
import CountReview from "@/components/countReview"
import ProductPage from "../product/[slug]/page"
// import ProductList from "@/components/productList"

const Cart = () => {
  return (
    <div>
    <div className="mt-[160px] w-[85%] m-auto">
        <div className="satoshi flex mb-[40px] gap-5 items-center">
            <div className="flex items-center gap-2">
                <Link href={"/"}><p className="font-[400] cursor-pointer text-[16px] hover:text-[#000000] leading-[21.6px] text-[#00000099]">Home</p></Link>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Shop</p>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Men</p>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div>
                <p className="font-[400] cursor-pointer ml-[-2px] text-[16px] leading-[21.6px] text-[#000000]">T-shirts</p>
            </div>
        </div>
        <ProductPage/>
        <div className="mt-[60px]">
            <div className="satoshi flex pb-[20px] justify-around border-b-[1px] mb-[30px]">
                <h3 className="text-[20px] cursor-pointer text-[#00000099] leading-[22px] font-[400] hover:text-[#000000]">Product Details</h3>
                <h3 className="text-[20px] cursor-pointer border-b-[#000000] pl-[100px] pr-[100px] border-b-[2px] pb-[20px] mb-[-21px] leading-[22px] font-[500] text-[#000000]">Rating & Reviews</h3>
                <h3 className="text-[20px] cursor-pointer leading-[22px] font-[400] text-[#00000099] hover:text-[#000000]">FAQs</h3>
            </div>
            <div className="flex justify-between">
                < CountReview />
                <div className="flex items-center gap-3">
                    <div className="bg-[#F0F0F0] rounded-[62px] w-[48px] h-[48px] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323]">
                        <Image src={filter} alt="filter"></Image>
                    </div>
                    <div className="flex justify-around items-center w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323]">
                        <OptionButton />
                    </div>
                    <div className="card bg-[#000000] w-[166px] h-[48px] rounded-[62px] flex justify-center items-center cursor-pointer">
                        <Link href={"/review"}><p className="text-[#FFFFFF] text-[16px] font-[500] leading-[21.6px]">Write a Review</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="satoshi mt-[20px]">
            <ViewReview limit={6} />
        </div>
        <div className="satoshi flex justify-center mt-[40px]">
            <Link href={"/allReviewDetail"}><button className='card w-[230px] h-[52px] mb-[60px] text-[16px] text-[#000000] font-[500] border-[2px] hover:bg-[#ececec] rounded-full p-2'>Load More Reviews</button></Link>
        </div>
        <div>
            <h1 className="integral text-[#000000] mb-[50px] text-[48px] leading-[45px] font-bold text-center">YOU MIGHT ALSO LIKE</h1>
        </div>
        <div className='flex gap-5 mb-[50px] justify-center'>
        <div className="transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card1} alt="cross" />
            <h3 className="satoshi text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Polo with Contrast Trims</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m1} alt="m1"></Image>
              <p className="satoshi text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='satoshi flex ml-[5px] gap-2 items-center'>
                <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$212</h4>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$242</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-20%</h3>
            </div>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card2} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Gradient Graphic T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m2} alt="m2"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">3.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex ml-[5px] gap-2 items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$145</h2>
            </div>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card3} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Polo with Tipping Details</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m3} alt="m3"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$180</h4>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card4} alt="cross"/>
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Black Striped T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m4} alt="m4"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">5.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex gap-2 ml-[5px] items-center mb-20'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$120</h2>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$150</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-30%</h3>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart