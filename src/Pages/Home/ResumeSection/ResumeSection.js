import React from 'react';
import CvResumeLink from '../CvResumeLink/CvResumeLink';

const ResumeSection = () => {
    return (
        <>
            <div className="hero-content text-center grid">
                <div className="mb-10">
                    <div className="heading-section">
                        <h1 className="big2 mt-2 mb-20 sm:hidden md:hidden lg:flex">Resume</h1>
                        <h2 className="text-6xl mb-12">Resume</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row text-start">
                    <div className="grid flex-grow card rounded-lg  bg-base-300 py-10 px-10">
                        <div className="">
                            <span className="text-yellow-500 text-4xl font-semibold">2016-2021</span>
                            <h2 className='text-2xl text-gray-500 py-2 px-2'>Bachelor's Degree of Computer Science</h2>
                            <span className="text-xl text-gray-500 px-2">Bangladesh Army University of Science and Technology</span>
                        </div>
                    </div>
                    <div className="divider-horizontal md:divider-horizontal lg:divider-horizontal"></div>
                    <div className="grid flex-grow card rounded-lg  bg-base-300 py-10 px-10 ">
                        <div className="">
                            <span className="text-yellow-500 font-semibold text-4xl">2020</span>
                            <h2 className='text-2xl text-gray-500 py-2 px-2'>Complete Web Development Course With Jhankar Mahbub</h2>
                            <span className="text-xl text-gray-500 px-2">Programming Hero</span>
                            <br /> <br />
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <p>
                        <CvResumeLink />
                    </p>
                </div>
            </div>
        </>
    );
};

export default ResumeSection;