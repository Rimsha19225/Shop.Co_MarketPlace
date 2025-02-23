import Image from "next/image";
import hero from "../../public/images/hero.png"
import star_1 from "../../public/images/Vector (2).png"
import star_2 from "../../public/images/Vector (3).png"
import New_Arival from "./new_Arival/page";
import parada from "../../public/images/parada.png"
import gucci from "../../public/images/gucci.png"
import calvin from "../../public/images/calvin.png"
import zara from "../../public/images/zara.png"
import versace from "../../public/images/versace.png"

export default function Home() {
  return (
    <div className="relative w-full bg-[#F2F0F1] min-h-screen mt-[6rem]">
      <div className="w-[100%] mx-auto flex flex-col md:flex-row justify-around">
        <div>
          <div className="mr-0">
            <h1 className="integral w-[100%] md:w-[30rem] px-3 md:px-0 font-bold text-[30px] md:text-[48px] leading-none mt-[3.5rem] md:mt-[5rem]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="satoshi w-[100%] md:w-[25rem] px-3 md:px-0 text-[0.7rem] md:text-[0.72rem] mt-7">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className="px-3">
              <button className="satoshi card mt-[1.5rem] text-[1.2rem] md:text-[1rem] py-2 md:p-4 rounded-full bg-[#000000] text-[#ffffff] w-[100%] md:w-[10.5rem] md:hover:w-[11rem]">Shop Now</button>
            </div>
            <div className="font-bold grid mb-4 md:mb-0 grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-12 mt-[2.5rem] text-center md:text-left w-[100%] sm:w-[28rem]">
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[16px] md:text-[30px] font-semibold cursor-pointer">200+</h2>
                <p className="satoshi text-[10px] sm:text-[10px]">International Brands</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[16px] md:text-[30px] font-semibold cursor-pointer">2,000+</h2>
                <p className="satoshi text-[10px] sm:text-[10px]">High-Quality Products</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[16px] md:text-[30px] font-semibold cursor-pointer">30,000+</h2>
                <p className="satoshi text-[10px] sm:text-[10px]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative mt-5 md:mt-0 w-[100%] md:w-[33.5rem] sm:w-[40rem] md:ml-[-5.7rem]">
          <Image src={star_1} alt="hero_section_image" className="shake absolute top-[5rem] md:top-[12rem] sm:top-60 left-[1.5rem] md:left-[5.5rem] sm:left-5 w-[3rem] z-0"/>
          <Image src={hero} alt="hero_section_image" className="relative z-10 w-[100%] md:h-[78.5vh] mt-[-1rem] md:mt-[1rem]"/>
          <Image src={star_2} alt="hero_section_image" className="shake absolute right-[1rem] md:right-5 top-0 md:top-24 w-[6rem] z-0"/>
        </div>
      </div>
      <div className='bg-[#000000] grid grid-cols-5 gap-[1rem] justify-center items-center md:gap-[5rem] py-[1.5rem] md:py-[1.7rem] px-[1rem] md:px-[5.5rem]'>
        <Image src={versace} alt="versace_logo" className='cursor-pointer'/>
        <Image src={zara} alt="zara_logo" className='cursor-pointer'/>
        <Image src={gucci} alt="gucci_logo" className='cursor-pointer'/>
        <Image src={parada} alt="parada_logo" className='cursor-pointer'/>
        <Image src={calvin} alt="calvin_logo" className='cursor-pointer'/>
      </div>
      <New_Arival/>
    </div>
  );
}
