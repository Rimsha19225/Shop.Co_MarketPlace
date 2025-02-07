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
    <div className="relative w-full bg-[#F2F0F1] h-auto xl:h-[80vh] mt-[8.6rem] overflow-x-hidden">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex flex-col sm:flex-row justify-around">
        <div>
          <div className="mr-20 mb-[35px]">
            <h1 className="integral w-[100%] md:w-[30rem] pl-4 md:pl-0 font-bold text-[30px] md:text-[48px] leading-none mt-[5rem]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="satoshi w-[100%] md:w-[25rem] pl-4 md:pl-0 text-[0.5rem] sm:text-[0.72rem] mt-7">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="satoshi card mt-[1.5rem] pl-4 md:pl-0 text-[1.5rem] sm:text-[1rem] p-2 md:p-4 sm:p-2 rounded-full bg-[#000000] text-[#ffffff] w-[100%] md:w-[10.5rem] sm:w-36 hover:w-[15rem] md:hover:w-[11rem]">Shop Now</button>
            <div className="font-bold grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-12 mt-[2.5rem] ml-[2rem] sm:ml-0 w-[20rem] sm:w-[28rem]">
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[40px] sm:text-[30px] font-semibold cursor-pointer">200+</h2>
                <p className="satoshi text-[13px] sm:text-[10px]">International Brands</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[40px] sm:text-[30px] font-semibold cursor-pointer">2,000+</h2>
                <p className="satoshi text-[13px] sm:text-[10px]">High-Quality Products</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[40px] sm:text-[30px] font-semibold cursor-pointer">30,000+</h2>
                <p className="satoshi text-[13px] sm:text-[10px]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-[33.5rem] sm:w-[40rem] ml-[-5.7rem] sm:mr-0">
          <Image src={star_1} alt="hero_section_image" className="shake flex top-[12rem] sm:top-60 left-[5.5rem] sm:left-5 absolute w-[3rem]"/>
          <Image src={hero} alt="hero_section_image" className="absolute w-[100%] h-[78.5vh] mt-[-1rem] md:mt-[1rem]"/>
          <Image src={star_2} alt="hero_section_image" className="shake absolute right-[5.7rem] sm:right-5 top-[3rem] sm:top-24 w-[6rem]"/>
        </div>
      </div>
      <div className='bg-[#000000] grid grid-cols-3 sm:grid-cols-5 gap-[2rem] justify-center items-center sm:gap-[8rem] h-auto pt-[2rem] sm:pt-[1.7rem] pb-[2rem] sm:pb-[1.7rem] pr-[3rem] sm:pr-[5.5rem] pl-[3rem] sm:pl-[5.5rem] mt-[39rem] sm:mt-[4rem]'>
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
