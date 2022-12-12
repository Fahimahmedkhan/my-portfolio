import React from 'react';
import { FaLinkedin, FaSkype, FaTwitter } from 'react-icons/fa';
import { MdContacts, MdEmail, MdPhone } from 'react-icons/md';
import CardBody from './CardBody';

const ContactSection = () => {
    const cardItems = [
        {
            icon: <MdContacts className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Address',
            'details': '3/238, Uposhohor, Sopura, Rajshahi'
        },
        {
            icon: <MdPhone className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Contact Number',
            'details': '+880 1788844667'
        },
        {
            icon: <MdEmail className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Email Address',
            'details': 'fahimkhangorbo@yahoo.com'
        },
        {
            icon: <FaLinkedin className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Linkedin',
            'details': 'https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/'
        },
        {
            icon: <FaTwitter className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Twitter',
            'details': 'https://twitter.com/Fahim_Gorbo'
        },
        {
            icon: <FaSkype className='w-20 h-20  text-yellow-500' />,
            'cardTitle': 'Skype',
            'details': 'fahimahmedkhangorbo'
        },
    ]
    return (
        <>
            <div className="hero-content text-center grid">
                <div className="mb-10">
                    <div className="heading-section">
                        <h1 className="big2 mt-2 mb-20 sm:hidden md:hidden lg:flex">Contact</h1>
                        <h2 className="text-6xl mb-12">Contact Me</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 '>
                        {
                            cardItems.map(cardItem => <CardBody
                                key={cardItem.cardTitle}
                                cardItem={cardItem}
                            ></CardBody>)
                        }
                    </div>
                </div>
                <a href="mailto:fahimkhangorbo@yahoo.com">
                    <div className="flex justify-center items-center">
                        <p className='w-40 rounded-full py-2 px-6 bg-yellow-600 hover:bg-yellow-700 hover:text-white text-black text-xl font-medium mx-2 my-10'>
                            Contact Me
                        </p>
                    </div>
                </a>
            </div>

        </>
    );
};

export default ContactSection;