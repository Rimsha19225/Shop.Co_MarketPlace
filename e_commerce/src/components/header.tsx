import Link from "next/link";

const Header = () => {
    return (
      <div className="w-full bg-black text-[#ffffff] fixed top-0 z-50 h-[30px] sm:h-[38px]">
        <div className="w-[90%] h-full flex justify-around items-center mx-auto">
          <div className="satoshi ml-[0.5rem] sm:ml-[2rem] md:ml-[3rem] text-center text-[10px] sm:text-[14px]">
            Sign up and get 20% off to your first order. 
            <span className="pl-2 cursor-pointer hover:underline">
              <Link href={"/login"}>Sign Up Now</Link>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;