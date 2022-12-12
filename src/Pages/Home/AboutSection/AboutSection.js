import React from 'react';
import picture from '../../../assets/images/CV-picture-removebg-preview.png';
import '../../../App.css';
import CvResumeLink from '../CvResumeLink/CvResumeLink';

const AboutSection = () => {
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <img src={picture} alt="" />
                </div>
            </div>
            <div className="text-center lg:text-left max-w-2xl rounded-lg shadow-2xl">
                <div className="heading-section">
                    <h1 className="big sm:hidden md:hidden lg:flex">About</h1>
                    <h2 className="mb-12 text-6xl">About Me</h2>
                    <ul className="px-10 text-3xl">
                        <li className="flex justify-between items-center py-1"><span>Name:</span> <span className='text-2xl'>Fahim Ahmed Khan Gorbo</span></li>
                        <li className="flex justify-between items-center v"><span>Date of birth:</span> <span className='text-2xl'>December 08, 1998</span></li>
                        <li className="flex justify-between items-center py-1"><span>Address:</span> <span className='text-2xl'>3/238, Uposhohor, Sopura, Rajshahi</span>
                        </li>
                        <li className="flex justify-between items-center py-1"><span>Zip code:</span> <span className='text-2xl'>6302</span></li>
                        <li className="flex justify-between items-center v"><span>Email:</span> <span className='text-2xl'>fahimkhangorbo@yahoo.com</span></li>
                        <li className="flex justify-between items-center py-1"><span>Phone: </span> <span className='text-2xl'>+8801788844667</span></li>
                    </ul>
                </div>
                <p className='mt-6'>
                    <CvResumeLink />
                </p>
            </div>
        </div>
    );
};

export default AboutSection;