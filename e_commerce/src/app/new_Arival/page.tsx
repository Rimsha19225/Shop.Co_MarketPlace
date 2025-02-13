import Image from "next/image"
import card1 from '../../../public/images/Frame 32.png'
import card2 from '../../../public/images/Frame 33.png'
import card3 from '../../../public/images/Frame 34.png'
import card4 from '../../../public/images/Frame 38.png'
import m1 from '../../../public/images/m1.png'
import m2 from '../../../public/images/m2.png'
import m3 from '../../../public/images/m3.png'
import m4 from '../../../public/images/m4.png'
import m5 from '../../../public/images/m5.png'
import m6 from '../../../public/images/m6.png'
import m7 from '../../../public/images/m7.png'
import Piccc1 from '../../../public/images/Frame 32 (1).png'
import Piccc2 from '../../../public/images/Frame 33 (1).png'
import Piccc3 from '../../../public/images/piccc3.png'
import Piccc4 from '../../../public/images/piccc4.png'
import image1 from '../../../public/images/image1.png'
import image2 from '../../../public/images/image2.png'
import image3 from '../../../public/images/image3.png'
import image4 from '../../../public/images/image4.png'
import Link from "next/link"
import CustomerReviewSlider from "@/components/customerReviewSlider"



const New_Arival = () => {
  return (
    <div className='mt-[60px] sm:mt-[88px] bg-white'>
      <h1 className='integral text-center mt-[4.5rem] md:mt-[8.2rem] mb-8 text-[40px] font-bold'>NEW ARRIVALS</h1>
      <div className='flex gap-5 justify-center'>
        <div className="card">
            <Image src={card1} alt="cross" />
            <h3 className="text-[18px] sm:text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">T-shirt With Tape Details</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m1} alt="m1"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$120</h4>
        </div>
        <div className="card">
            <Image src={card2} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Skiny Fit Jeans</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m2} alt="m2"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">3.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex ml-[5px] gap-2 items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$240</h2>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$260</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-20%</h3>
            </div>
        </div>
        <div className="card hidden sm:inline-block">
            <Image src={card3} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Checkered Shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m3} alt="m3"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$180</h4>
        </div>
        <div className="card hidden sm:inline-block">
            <Image src={card4} alt="cross"/>
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Sleeve Striped T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m4} alt="m4"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex gap-2 ml-[5px] items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$130</h2>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$160</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-30%</h3>
            </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <Link href={"/category"}><button className='card w-[27.5rem] sm:w-40 mb-[50px] border-[2px] hover:bg-[#ececec] rounded-full p-2 hover:w-44'>View All</button></Link>
      </div>

      <div className="">
      <h1 className='integral text-center mt-12 mb-8 text-[40px] font-bold'>TOP SELLING</h1>
      <div className='flex gap-5 justify-center'>
        <div className="card">
            <Image src={Piccc1} alt="piccc1" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Vertical Striped Shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m5} alt="m5"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">5.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex ml-[5px] gap-2 items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$212</h2>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$232</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-20%</h3>
            </div>
        </div>
        <div className="card rounded-xl">
            <Image src={Piccc2} alt="piccc2" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Courage Graphics T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m6} alt="m6"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h2 className="text-[24px] leading-[32.4px] font-[700]">$145</h2>
        </div>
        <div className="card hidden sm:inline-block">
            <Image src={Piccc3} alt="piccc3" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Loose Fit Bermuda Shorts</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m7} alt="m7"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">3.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$80</h4>
        </div>
        <div className="card hidden sm:inline-block">
            <Image src={Piccc4} alt="piccc4"/>
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Faded Skinny Jeans</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m4} alt="m4"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex gap-2 ml-[5px] items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$210</h2>
            </div>
        </div>
      </div>
      <div className="flex justify-center mb-[50px] mt-[50px]">
        <Link href={"/category"}><button className='card w-[27.5rem] sm:w-40 border-[2px] hover:bg-[#ececec] rounded-full p-2 hover:w-44'>View All</button></Link>
      </div>
    </div>
    <div className="w-auto sm:w-[1239px] m-4 sm:m-auto h-auto rounded-[40px] bg-[#F0F0F0] mt-[7rem]">
        <h1 className="integral text-[#000000] text-center font-[700] text-[45px] mb-[50px] pt-[50px] leading-[57.6px]">BROWSE BY DRESS STYLE</h1>
        <div className="w-[90%] m-auto">
          <div className="flex flex-col sm:flex-row mb-[-30px] gap-0 sm:gap-6">
            <div className="card cursor-pointer">
              <Image className="rounded-[20px] h-[15rem] sm:h-auto" src={image1} alt="image1"></Image>
              <h3 className="text-[#000000] text-[36px] font-[700] relative bottom-[220px] sm:bottom-[260px] left-[30px]">Casual</h3>
            </div>
            <div className="card cursor-pointer">
              <Image className="rounded-[20px] h-[15rem] sm:h-auto" src={image2} alt="image2"></Image>
              <h3 className="text-[#000000] text-[36px] font-[700] relative bottom-[220px] sm:bottom-[260px] left-[30px]">Formal</h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-[-30px] gap-0 sm:gap-6">
            <div className="card cursor-pointer">
            <Image className="rounded-[20px] w-[684] bg-[white] h-[15rem] sm:h-auto border-l-white border-l-[50px]" src={image3} alt="image3"></Image>
            <h3 className="text-[#000000] text-[36px] font-[700] relative bottom-[220px] sm:bottom-[260px] left-[30px]">Party</h3>
            </div>
            <div className="card cursor-pointer">
            <Image className="rounded-[20px] w-[407px] bg-[white] h-[15rem] sm:h-auto border-l-white border-l-[50px]" src={image4} alt="image4"></Image>
            <h3 className="text-[#000000] text-[36px] font-[700] relative bottom-[220px] sm:bottom-[260px] left-[30px]">Gym</h3>
            </div>
          </div>
        </div>
    </div>  
    
    <div>
      <CustomerReviewSlider />
    </div>
    </div>
  )
}

export default New_Arival
