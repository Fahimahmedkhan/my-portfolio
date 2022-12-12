import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFirebase, SiHeroku, SiNetlify, SiExpress, SiMongodb } from 'react-icons/si';
import CardBody from './CardBody';

const SkillsSection = () => {
    const cardItems = [
        {
            icon: <FaHtml5 className='w-20 h-20' />,
            'cardTitle': 'HTML'
        },
        {
            icon: <FaCss3Alt className='w-20 h-20' />,
            'cardTitle': 'CSS'
        },
        {
            icon: <FaBootstrap className='w-20 h-20' />,
            'cardTitle': 'Bootstrap'
        },
        {
            icon: <SiTailwindcss className='w-20 h-20' />,
            'cardTitle': 'Tailwind CSS'
        },
        {
            icon: <SiJavascript className='w-20 h-20' />,
            'cardTitle': 'javaScript'
        },
        {
            icon: <FaReact className='w-20 h-20' />,
            'cardTitle': 'React.js'
        },
        {
            icon: <SiHeroku className='w-20 h-20' />,
            'cardTitle': 'Heroku'
        },
        {
            icon: <SiNetlify className='w-20 h-20' />,
            'cardTitle': 'Netlify'
        },
        {
            icon: <FaNodeJs className='w-20 h-20' />,
            'cardTitle': 'Node.js'
        },
        {
            icon: <SiExpress className='w-20 h-20' />,
            'cardTitle': 'Express.js'
        },
        {
            icon: <SiFirebase className='w-20 h-20' />,
            'cardTitle': 'Firebase'
        },
        {
            icon: <SiMongodb className='w-20 h-20' />,
            'cardTitle': 'MongoDB'
        },
    ]
    return (
        <>
            <div className="hero-content text-center grid">
                <div className="mb-10">
                    <div className="heading-section">
                        <h1 className="big2 mt-2 mb-20 ml-10 sm:hidden md:hidden lg:flex">Skills</h1>
                        <h2 className="text-6xl mb-12">My Skills</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                            cardItems.map(cardItem => <CardBody
                                key={cardItem.cardTitle}
                                cardItem={cardItem}
                            ></CardBody>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsSection;