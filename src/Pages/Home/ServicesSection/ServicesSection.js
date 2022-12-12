import React from 'react';
import { MdDesignServices } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';

const ServicesSection = () => {
    return (
        <>
            <div className="hero-content text-center grid">
                <div className="mb-10">
                    <div className="heading-section">
                        <h1 className="big2 mt-2 mb-20 sm:hidden md:hidden lg:flex ">Services</h1>
                        <h2 className="text-6xl mb-12">Services</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className='grid grid-cols-3 gap-4'>
                        <div className="card lg:card-side bg-base-300 shadow-xl hover:bg-yellow-500 hover:text-black py-10 rounded-lg">
                            <div className="card-body flex justify-center items-center">
                                <MdDesignServices className='w-20 h-20' />
                                <h2 className="card-title text-4xl ">Web Design</h2>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-base-300 shadow-xl hover:bg-yellow-500 hover:text-black py-10 rounded-lg">
                            <div className="card-body flex justify-center items-center">
                                <AiFillApi className='w-20 h-20' />
                                <h2 className="card-title text-4xl">Web Development</h2>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-base-300 shadow-xl hover:bg-yellow-500 hover:text-black py-10 rounded-lg">
                            <div className="card-body flex justify-center items-center">
                                <MdDesignServices className='w-20 h-20' />
                                <h2 className="card-title text-4xl">UX/UI Design</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesSection;