import React from 'react'
import {FaUser} from 'react-icons/fa'
import SideBarItem from './SideBarItem'
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
      <img
            src="https://cdn.iconscout.com/icon/free/png-256/logo-1889519-1597579.png?f=webp&w=512"
            width={40}
            height={40}
            alt="facebook messenger png facebook messenger vector logo logo"
            className='rounded-full cursor-pointer'
          />
          <p className="hidden sm:inline-flex font-medium">Pranjal Goyal</p>
      </div>

      <SideBarItem Icons={FaUser} value="Friends"/>
      <SideBarItem Icons={MdGroups} value="Groups" />
      <SideBarItem Icons={AiOutlineShop} value="MarketPlace" />
      <SideBarItem Icons={MdOutlineOndemandVideo} value="Watch" />
      <SideBarItem Icons={BsStopwatch} value="Memories" />
      <SideBarItem Icons={MdOutlineExpandMore} value="See more" />
    </div>
  )
}

export default SideBar
