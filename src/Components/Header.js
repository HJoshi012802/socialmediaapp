import React from "react";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import {AiOutlineVideoCamera, AiFillBell} from "react-icons/ai";
import {RiFlag2Line, RiGamepadLine} from "react-icons/ri";
import {BsChatLeft} from "react-icons/bs";
import {CgMenuGridO} from "react-icons/cg";
import {MdOutlineExpandMore} from "react-icons/md";


const Header = () => {
  return (
    <div className="bg-white flex items-center p-5 shadow-md top-0 sticky z-50 h-16">
      {/* Left */}

      <div className="flex min-w-fit">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/logo-1889519-1597579.png?f=webp&w=512"
            width={40}
            height={40}
            alt="facebook messenger png facebook messenger vector logo logo"
          />
      </div>

      <div className="flex items-center space-x-3 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
        <HiOutlineSearch size={20} />
        <input
          className="inline-flex bg-transparent focus:outline-none"
          type="text"
          placeholder="Search"
          Style={"height: 30px;"}
        />
      </div>

      {/* Centre */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome className="mx-auto" size={20} />
          </div>
          
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BsChatLeft className="mx-auto" size={20} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line className="mx-auto" size={20} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineVideoCamera className="mx-auto" size={20} />
          </div>

          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiGamepadLine className="mx-auto" size={20} />
          </div>

        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/logo-1889519-1597579.png?f=webp&w=512"
            width={40}
            height={40}
            alt="facebook messenger png facebook messenger vector logo logo"
          />
          <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">Pranjal Goyal</p>
          <CgMenuGridO size={20} className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"></CgMenuGridO>

        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />

        <MdOutlineExpandMore
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>

    </div>
  );
};

export default Header;
