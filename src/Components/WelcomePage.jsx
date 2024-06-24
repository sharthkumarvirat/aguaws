import React from 'react';
import currency from "../assets/currency.png";
import water_drop from "../assets/water_drop.png";
import graph from "../assets/bar_graph.png";

export default function WelcomePage() {
    const water = [
        {
            title: "Kaveri water Supply",
            price: "2500",
            liters: "1l",
            view: "view more",
            rupees: currency,
            drop: water_drop
        },
        {
            title: "Kaveri water Supply",
            price: "2500",
            liters: "1l",
            view: "view more",
            rupees: currency,
            drop: water_drop
        },
    ];

    return (
        <div className=" mx-auto px-4 mb-4">
            <div className='w-[85vw] text-4xl mb-6'>
                <h3 className='font-bold text-2xl text-[#305bb0fd]'>Welcome!!</h3>
            </div>
            <div className='flex gap-6 max-sm:flex-col max-md:flex-col lg:flex-row'>
                <div className="left max-sm:w-full max-md:w-1/2 lg:w-1/2">
                    {/* carousel */}
                    <div className="mb-4">
                        <div className="w-full h-[15rem] p-4 border-0 bg bg-transparent">
                            <div className="carousel w-full h-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                                        className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="w-full p-4 border-0 bg-transperent">
                            <img src={graph} alt="" />
                        </div>
                    </div>
                </div>
                {/* Right content */}
                <div className="right max-sm:w-full max-md:w-1/2 lg:w-1/2">
                    <div className="p-4 bg-[#4b494922] h-[34rem] flex items-center justify-between flex-col">
                        <div className='w-full'>
                            <h4 className='text-2xl font-bold text-[#305bb0fd]'>Order Tank</h4>
                        </div>
                        <div className='w-full'>
                            {water.map((list, index) => (
                                <div key={index} className="mb-4 p-2 text-white h-[6rem] bg-[#222425e8]">
                                    <div className="flex items-center justify-evenly text-[#305bb0fd]">
                                        <h1 className="text-xl font-semibold">{list.title}</h1>
                                        <h4>{list.view}</h4>
                                    </div>
                                    <div className="flex items-center justify-evenly mt-2">
                                        <div className="flex items-center gap-2">
                                            <img src={list.rupees} width={25} alt="" />
                                            <p>:{list.price}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={list.drop} width={25} alt="" />
                                            <p>:{list.liters}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="btn px-4 py-2 bg-transparent">View all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
