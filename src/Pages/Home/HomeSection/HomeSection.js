import React from 'react';
import CvResumeLink from '../CvResumeLink/CvResumeLink';
import picture from '../../../assets/images/CV-picture-removebg-preview.png';

const HomeSection = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <img src={picture} alt="" />
                </div>
            </div>
            <div className="text-center lg:text-left max-w-2xl rounded-lg shadow-2xl">
                <h1 className="text-xl font-bold text-yellow-600 py-6">Hello!</h1>
                <h2 className="text-6xl">I'm <span className='text-yellow-600'>Fahim Ahmed Khan Gorbo</span></h2>
                <p className="py-6 text-4xl">I'm a <span className='text-yellow-600'>front end web developer</span> based on React.js</p>
                <p className='mt-4'>
                    <CvResumeLink />
                </p>
            </div>
        </div>
    );
};

export default HomeSection;