import React from 'react'
import document from "../assets/document.png";
import location from "../assets/local_shipp.png";
import menu from "../assets/menu_.png";
import logout from '../assets/logout_24.png'
import settings from "../assets/settings.png";
import space_dashboard from "../assets/space_dashboard.png";
import { Link } from 'react-router-dom';

export default function Sidebar({ toggleTheme }) {
    return (
        <div className='flex max-sm:items-start max-md:items-start lg:items-end'>
            <div className={`flex item-end justify-between rounded-xl flex-col max-sm:w-[2rem] max-md:w-[4rem] lg:w-[6rem] max-sm:h-full max-md:h-full 
                lg:h-[36rem] p-4 ${toggleTheme ? "bg-[#82e6ff7e]" : "bg-[#302e2e]"}`}>

                <Link to="/"> <a ><img src={menu} width={50} alt="" /></a> </Link>
                <Link to="/notification">  <a ><img src={space_dashboard} width={50} alt="" /></a></Link>
                <Link to="/orders"> <a ><img src={document} alt="" width={50} /></a></Link>

                <a ><img src={location} alt="" width={50} /></a>
                <a ><img src={settings} alt="" width={50} /></a>
                <a ><img src={logout} alt="" width={50} /></a>
            </div>

        </div>
    )
}
