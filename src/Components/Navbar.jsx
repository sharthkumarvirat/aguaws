import React from 'react'
import contact from "../assets/contacts_pr.png";
import logo from "../assets/Logo.svg";
import Notifications from "../assets/notifications.png";
import Group from "../assets/Group 33.png";
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import OrderHistory from './OrderHistory';
import Notification from './Notification';

export default function Navbar({ setToggleTheme, toggleTheme }) {

    const toggleTheTheme = (e) => {
        setToggleTheme(e.target.checked);
    }

    return (
        <div className='block'>
            <div className='flex justify-end max-sm:w-[100vw] max-md:w-[70vw] lg:w-[90vw]  h-[10rem]'>
                <div className='flex justify-between itms-center h-full w-full p-5'>
                    <div className='max-sm:hidden max-md:hidden lg:flex justify-center itms-center h-full gap-8'>
                        <img src={logo} alt="" className='h-full w-[8rem]' />
                        <input className='my-12 p-4 rounded-lg bg-white max-md:hidden lg:block lg:w-[28rem]' type="text" name="search" placeholder='search' />
                    </div>
                    <div className={`max-sm:w-full max-md:w-[31rem] lg:w-[41rem] max-sm:-h-[4rem] max-md:h-[6rem] lg:h-[6rem] rounded-xl border-0 flex
                         item-center justify-center p-3 ${toggleTheme ? "bg-[#82e6ff9a]" : "bg-[#302e2e]"}`}>
                        {/* images */}
                        <div className='w-full h-full flex item-center justify-around'>
                            <a><img src={contact} className='max-sm:w-[2rem] max-md:w-[2rem] lg:w-[3rem]' alt="" /></a>
                            <a><img src={Group} alt="" className='max-sm:w-[2rem] max-md:w-[2rem] lg:w-[3rem]' /></a>
                            <a><img src={Notifications} alt="" className='max-sm:w-[2rem] max-md:w-[2rem] lg:w-[3rem]' /></a>
                            {/* toggle */}
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className={`${toggleTheme ? "text-[#000000]" : "text-[#cdbebe]"} mr-4`}>{toggleTheme ? "Dark mode" : "Light mode"}</span>
                                    <input type="checkbox" className="toggle" onChange={(e) => { toggleTheTheme(e) }} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rotes */}

            <div className='m-2'>
                <Routes>
                    <Route path='/' element={<WelcomePage />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/orders' toggleTheme={toggleTheme} element={<OrderHistory />} />
                </Routes>
            </div>
        </div >
    )
}
