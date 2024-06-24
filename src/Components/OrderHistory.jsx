import React, { useState } from 'react';
import Completed from "../assets/priority.png";
import Pending from "../assets/pending_.png";
import Progress from "../assets/progress.png";
import Delete from "../assets/delete_.png";
import History from "../assets/history.png";
import currency from "../assets/currency.png";
import Schedule from "../assets/schedule.png";
import Note from "../assets/note_alt.png";

export default function OrderHistory({ toggleTheme }) {
    const [open, setOpen] = useState(false)
    const [userdata, setUserdata] = useState({
        note: "",
    })
    const items = [
        {
            id: "1",
            note: "2536459854525415524-500L",
            imgNote: Note,
            rupees: "2500",
            imgRups: currency,
            time: "2024-08-20-12.20-13.00",
            imgTime: Schedule,
            days: "2 Days",
            imgDays: History,
            btn: "Completed",
            imgBtn: Completed
        },
        {
            id: "2",
            note: "2536459854525415524-600L",
            imgNote: Note,
            rupees: "2500",
            imgRups: currency,
            time: "2024-08-20-12.20-13.00",
            imgTime: Schedule,
            days: "2 Days",
            imgDays: History,
            btn: "In Progress",
            imgBtn: Progress
        },
        {
            id: "3",
            note: "2536459854525415524-400L",
            imgNote: Note,
            rupees: "2500",
            imgRups: currency,
            time: "2024-08-20-12.20-13.00",
            imgTime: Schedule,
            days: "2 Days",
            imgDays: History,
            btn: "Cancelled",
            imgBtn: Delete
        },
        {
            id: "4",
            note: "2536459854525415524-300L",
            imgNote: Note,
            rupees: "2500",
            imgRups: currency,
            time: "2024-08-20-12.20-13.00",
            imgTime: Schedule,
            days: "2 Days",
            imgDays: History,
            btn: "Pending",
            imgBtn: Pending
        },
    ];
    const handleClick = (note) => {
        setOpen(!open)
        setUserdata({ note })
    }

    return (
        <div className="container mx-auto p-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
                {items.map((ele) => (
                    <div key={ele.id} className='rounded-lg p-4 border-2 border-gray-50 bg bg-transparent'>
                        <div className='flex items-center mb-4 w-36 h-10 p-2  border-0 rounded-lg bg-slate-950 text-white'>
                            <img src={ele.imgBtn} width={20} alt='' className='mr-2' />
                            <p>{ele.btn}</p>
                        </div>
                        <div className='text-base text-[]'>
                            <div className='flex items-center gap-2 p-2'>
                                <img src={ele.imgNote} width={20} alt='' className='mr-2' />
                                <p>:{ele.note}</p>
                            </div>
                            <div className='flex items-center gap-2 p-2'>
                                <img src={ele.imgRups} width={20} alt='' className='mr-2' />
                                <p>:{ele.rupees}</p>
                            </div>
                            <div className='flex items-center gap-2 p-2'>
                                <img src={ele.imgTime} width={20} alt='' className='mr-2' />
                                <p>:{ele.time}</p>
                            </div>
                            <div className='flex items-center gap-2 p-2'>
                                <img src={ele.imgDays} width={20} alt='' className='mr-2' />
                                <p> : {ele.days}</p>
                            </div>
                        </div>
                        <div>
                            <button className='btn mt-4' onClick={() => { handleClick(ele.note) }}>View Orders</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* pop view */}
            <div onClick={() => { setOpen(false) }} className='w-full' style={{ display: open ? 'block' : 'none', position: "absolute", opacity: "0.6", background: "grey" }}>
            </div>
            <div className='bg-primary' style={{ width: "auto", height: "auto", border: "1px solid white", borderRadius: "10px", display: open ? 'block' : 'none', padding: "30px", position: "absolute", top: "50%", left: "30%", background: "#0f2642d3", boxShadow: "0px 0px 10px grey", color: "white" }}>
                <div className='w-[26rem] h-[8rem]'>
                    <div className='flex justify-between'>
                        <h4>{userdata.note}</h4>
                        <h1 onClick={() => { setOpen(!open) }} className='font-semibold text-3xl'>x</h1>
                    </div>
                    <hr />
                    <br />
                    <p>No Time data Found for this Order</p>
                    <br />
                    <button className='w-24 h-10 bg-transperent border-2 rounded-lg'>view More</button>
                </div>

            </div>
        </div>
    );
}
