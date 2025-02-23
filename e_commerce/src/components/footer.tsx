import Image from "next/image";
import facebook from "../../public/images/logo-fb-simple 2.png";
import twitter from "../../public/images/logo-twitter 2.png";
import instagram from "../../public/images/logo-instagram 1.png";
import github from "../../public/images/logo-github 1.png";
import mail from "../../public/images/Frame (5).png";
import visa from "../../public/images/Visa.png";
import master from "../../public/images/Mastercard.png";
import paypal from "../../public/images/Paypal.png";
import pay from "../../public/images/ Pay.png";
import Gplay from "../../public/images/G Pay.png";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] w-[100%] h-auto pt-1 md:pt-0">
      <div className="relative w-[95%] md:w-[87%] sm:w-[100%] mx-auto h-auto pb-7 md:pb-5 pt-5 bg-black rounded-2xl flex flex-col md:flex-row items-center justify-between md:gap-[20rem] px-6 md:px-10 mt-[-6rem] md:mt-[-10rem]">
        {/* Heading */}
        <h2 className="text-white text-[25px] sm:text-[31px] md:text-[32px] font-bold text-left leading-8 md:leading-none w-full md:w-1/3">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        {/* Input & Button Section */}
        <div className="flex flex-col items-center md:items-end w-full md:w-2/3 gap-4 mt-4 md:mt-0">
          <div className="relative w-full max-w-[400px]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full p-3 pl-12 border-none rounded-full text-[15px] bg-white text-black shadow-md focus:outline-none"
            />
            <span className="absolute inset-y-0 left-4 flex items-center cursor-pointer">
              <Image src={mail} alt="icon_send" />
            </span>
          </div>

          <button className="w-full max-w-[400px] bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="hidden md:flex md:flex-row gap-[8.2rem] w-[87%] ml-[2rem] md:ml-[6.3rem] mt-8 md:mt-14">
        <div className="w-[100%] md:w-[22%]">
          <h3 className="integral font-[700] text-[#000000] text-[33.45px] leading-[40.15px] mb-4 md:mb-6">
            SHOP.CO
          </h3>
          <p className="satoshi font-[400] mb-2 md:mb-6 hover:text-[#908f8f] ">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={twitter}
                alt="icon"
                className="mt-[0.1rem] ml-[0.1rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#000000] p-2 hover:bg-[#3c3b3b]">
              <Image
                src={facebook}
                alt="icon"
                className="mt-[0.1rem] ml-[0.26rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={instagram}
                alt="icon"
                className="mt-[0.02rem] ml-[0.03rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={github}
                alt="icon"
                className="mt-[0.05rem] ml-[0.05rem]"
              />
            </div>
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
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Customer Support
          </p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Delivery Details
          </p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Terms & Conditions
          </p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Privacy Policy
          </p>
        </div>
        <div className="satoshi">
          <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">FAQ</h3>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">Account</p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Manage Deliveries
          </p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">Orders</p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">Payments</p>
        </div>
        <div className="satoshi">
          <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Resources</h3>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">Free eBooks</p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Development Tutorial
          </p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">How to - Blog</p>
          <p className="text-[15px] mb-3 hover:text-[#908f8f]">
            Youtube Playlist
          </p>
        </div>
      </div>
      <div className="md:hidden gap-[8.2rem] w-[87%] ml-[2rem] md:ml-[6.3rem] mt-8 md:mt-14">
        <div className="w-[100%] md:w-[22%] mb-6 md:mb-0">
          <h3 className="integral font-[700] text-[#000000] text-[33.45px] leading-[40.15px] mb-4 md:mb-6">
            SHOP.CO
          </h3>
          <p className="satoshi font-[400] mb-2 md:mb-6 hover:text-[#908f8f] ">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={twitter}
                alt="icon"
                className="mt-[0.1rem] ml-[0.1rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#000000] p-2 hover:bg-[#3c3b3b]">
              <Image
                src={facebook}
                alt="icon"
                className="mt-[0.1rem] ml-[0.26rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={instagram}
                alt="icon"
                className="mt-[0.02rem] ml-[0.03rem]"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-gray-400 border p-2 hover:bg-[#dcdbdb]">
              <Image
                src={github}
                alt="icon"
                className="mt-[0.05rem] ml-[0.05rem]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="satoshi mb-4 md:mb-0">
            <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Company</h3>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">About</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Features</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Works</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Career</p>
          </div>
          <div className="satoshi mb-4 md:mb-0">
            <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">Help</h3>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Customer Support
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Delivery Details
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Terms & Conditions
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Privacy Policy
            </p>
          </div>
          <div className="satoshi mb-4 md:mb-0">
            <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">FAQ</h3>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Account</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Manage Deliveries
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Orders</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Payments</p>
          </div>
          <div className="satoshi mb-4 md:mb-0">
            <h3 className="text-[23px] mb-3 md:mb-6 font-semibold">
              Resources
            </h3>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">Free eBooks</p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Development Tutorial
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              How to - Blog
            </p>
            <p className="text-[15px] mb-3 hover:text-[#908f8f]">
              Youtube Playlist
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4 md:mt-[3rem] w-[100%] border-[2px] " />
      <div className="satoshi flex flex-col justify-between md:flex-row  mt-8 px-6 md:px-24 pb-8">
        <div className="hover:text-[#908f8f] text-center md:text-left text-[14px] sm:text-[17px]">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className="flex gap-3 md:gap-4 ml-0 justify-center md:justify-start pt-4 md:pt-0">
          <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]">
            <Image src={visa} alt="icon" className="mt-[0.15rem]" />
          </div>
          <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]">
            <Image src={master} alt="icon" className="ml-1" />
          </div>
          <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]">
            <Image src={paypal} alt="icon" className="mt-[0.25rem]" />
          </div>
          <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]">
            <Image src={pay} alt="icon" className="mt-[0.15rem] ml-[0.15rem]" />
          </div>
          <div className="bg-white w-10 p-1 rounded-[0.3rem] h-[1.55rem] hover:bg-[#e8e6e6]">
            <Image
              src={Gplay}
              alt="icon"
              className="mt-[0.15rem] ml-[0.1rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
