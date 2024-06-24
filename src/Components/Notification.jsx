import React from 'react'
import checkbox from "../assets/priority.png";
import history from "../assets/history.png";

export default function Notification() {
    const lists = [
        {
            title: "Logged in Succesfully",
            time: history,
            days: "2days"
        },
        {
            title: "Logged in Succesfully",
            time: history,
            days: "2days"
        },
        {
            title: "523622 Tanker is Ordered",
            time: history,
            days: "2days"
        },
        {
            title: "523622 Tanker is Ordered",
            time: history,
            days: "2days"
        },
        {
            title: "523622 Tanker is Ordered",
            time: history,
            days: "2days"
        },
        {
            title: "523622 Tanker is Ordered",
            time: history,
            days: "2days"
        },

    ]
    return (
        <div>
            <div className='flex items-center  w-[12rem] h-10 p-4 gap-2 bg-[#3a3a69af] text-white m-3'>
                <img src={checkbox} width={20} alt="" />
                <h1 className='font-semibold text-base text-blue-950'>Marked All Seen</h1>
            </div>
            <div className='flex items-center gap-3 flex-col w-full'>
                {
                    lists.map((item) => {
                        return (
                            <div className='w-full h-auto border-0 bg-[#353b3c3b] p-2'>
                                <h1 className='font-semibold text-lg text-white'>{item.title}</h1>
                                <div className='flex items-center gap-2'>
                                    <img src={history} width={20} alt="" />
                                    <p className='text-lg text-grey'>: {item.days}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}
