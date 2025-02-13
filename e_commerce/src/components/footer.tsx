import Image from "next/image";
import facebook from '../../public/images/logo-fb-simple 2.png'
import twitter from '../../public/images/logo-twitter 2.png'
import instagram from '../../public/images/logo-instagram 1.png'
import github from '../../public/images/logo-github 1.png'
import mail from "../../public/images/Frame (5).png"
import visa from "../../public/images/Visa.png"
import master from "../../public/images/Mastercard.png"
import paypal from "../../public/images/Paypal.png"
import pay from "../../public/images/ Pay.png"
import Gplay from "../../public/images/G Pay.png"


const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] w-[100%] h-auto pt-20 mt-20">
      <div className="relative w-[90%] md:w-[87%] sm:w-[100%] mx-auto h-auto pb-7 md:pb-5 pt-5 bg-[#000000] rounded-2xl sm:ml-[4.3rem] md:ml-[6.3rem] flex flex-col sm:flex-row md:flex-row items-center pl-0 md:pl-16 mt-[-12rem] md:mt-[-9rem]">
        <div className="integral text-white text-[30px] sm:text-[31px] md:text-[32px] pt-4 sm:pt-2 md:pt-0 w-[80%] sm:w-[50%] md:w-[35%] font-bold leading-none">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
        <div className="pt-[1rem] md:pt-[0rem]">
          <div className="relative ml-[0rem] md:ml-[20rem] w-[20rem] md:w-[25rem] rounded-full mt-4 md:mt-0">
                <input type="text" placeholder="Enter your email address" className="mb-3 p-[0.75rem] hover:bg-[#e3e2e2] pl-12 w-full border-none text-[15px] rounded-full bg-[#fffff] text-black" />
                <span className="satoshi absolute inset-y-0 left-4 flex items-center pt-[0rem] cursor-pointer">
                    <Image src={mail} alt='icon_send' className="mb-3"/>
                </span>
          </div>
          <button className="satoshi text-black bg-white w-[20rem] md:w-[25rem] rounded-full p-[0.75rem] ml-[0rem] md:ml-[20rem] hover:bg-[#e3e2e2]">Subscribe to Newsletter</button>
        </div>
      </div>
        <div className="hidden md:flex md:flex-row gap-[8.2rem] w-[87%] ml-[2rem] md:ml-[6.3rem] mt-8 md:mt-14">
              <div className="w-[100%] md:w-[22%]">
                  <h3 className="integral font-[700] text-[#000000] text-[33.45px] leading-[40.15px] mb-4 md:mb-6">SHOP.CO</h3>
                  <p className="satoshi font-[400] mb-2 md:mb-6 hover:text-[#908f8f] ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={twitter} alt="icon" className="mt-[0.1rem] ml-[0.1rem]"/></div>
                    <div className="w-8 h-8 rounded-full bg-[#000000] p-2 hover:bg-[#3c3b3b]"><Image src={facebook} alt="icon" className="mt-[0.1rem] ml-[0.26rem]"/></div>
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={instagram} alt="icon" className="mt-[0.02rem] ml-[0.03rem]"/></div>
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={github} alt="icon" className="mt-[0.05rem] ml-[0.05rem]"/></div>
                  </div>
              </div>
              <div className="satoshi">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Company</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">About</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Features</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Works</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Career</p>
              </div>
              <div className="satoshi">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Help</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Customer Support</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Delivery Details</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Terms & Conditions</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Privacy Policy</p>
              </div>
              <div className="satoshi">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">FAQ</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Account</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Manage Deliveries</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Orders</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Payments</p>
              </div>
              <div className="satoshi">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Resources</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Free eBooks</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Development Tutorial</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">How to - Blog</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Youtube Playlist</p>
              </div>
        </div>
        <div className="md:hidden gap-[8.2rem] w-[87%] ml-[2rem] md:ml-[6.3rem] mt-8 md:mt-14">
              <div className="w-[100%] md:w-[22%] mb-6 md:mb-0">
                  <h3 className="integral font-[700] text-[#000000] text-[33.45px] leading-[40.15px] mb-4 md:mb-6">SHOP.CO</h3>
                  <p className="satoshi font-[400] mb-2 md:mb-6 hover:text-[#908f8f] ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={twitter} alt="icon" className="mt-[0.1rem] ml-[0.1rem]"/></div>
                    <div className="w-8 h-8 rounded-full bg-[#000000] p-2 hover:bg-[#3c3b3b]"><Image src={facebook} alt="icon" className="mt-[0.1rem] ml-[0.26rem]"/></div>
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={instagram} alt="icon" className="mt-[0.02rem] ml-[0.03rem]"/></div>
                    <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]"><Image src={github} alt="icon" className="mt-[0.05rem] ml-[0.05rem]"/></div>
                  </div>
              </div>
              <div className="grid grid-cols-2">
              <div className="satoshi mb-6 md:mb-0">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Company</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">About</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Features</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Works</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Career</p>
              </div>
              <div className="satoshi mb-6 md:mb-0">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Help</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Customer Support</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Delivery Details</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Terms & Conditions</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Privacy Policy</p>
              </div>
              <div className="satoshi mb-6 md:mb-0">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">FAQ</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Account</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Manage Deliveries</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Orders</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Payments</p>
              </div>
              <div className="satoshi mb-6 md:mb-0">
                <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Resources</h3>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Free eBooks</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Development Tutorial</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">How to - Blog</p>
                <p className="text-[15px] mb-3 hover:text-[#908f8f]">Youtube Playlist</p>
              </div>
              </div>
        </div>
        <hr className="mt-[3rem] w-[100%] md:w-[86%] border-[2px] ml-[0.1rem] sm:ml-[6.3rem]"/>
        <div className="satoshi flex flex-col sm:flex-row  mt-8 ml-[5.3rem] md:ml-[6.3rem] mb-6 sm:mb-8 md:mb-10 pb-8">
          <div className="hover:text-[#908f8f] ml-[-0.5rem] md:ml-[1rem] sm:text-left text-[15px] sm:text-[17px]">Shop.co © 2000-2023, All Rights Reserved</div>
          <div className="flex gap-4 ml-[0rem] sm:ml-[40rem] md:ml-[44rem] pt-4 md:pt-0">
            <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]"><Image src={visa} alt="icon" className="mt-[0.15rem]"/></div>
            <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]"><Image src={master} alt="icon" className="ml-1"/></div>
            <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]"><Image src={paypal} alt="icon" className="mt-[0.25rem]"/></div>
            <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]"><Image src={pay} alt="icon" className="mt-[0.15rem] ml-[0.15rem]"/></div>
            <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]"><Image src={Gplay} alt="icon" className="mt-[0.15rem] ml-[0.1rem]"/></div>
          </div>
        </div>
    </div>
  )
}

export default Footer;