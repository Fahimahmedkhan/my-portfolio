import React from 'react';
import CardBody from './CardBody';

const ProjectsSection = () => {
    const cardItems = [
        {
            image: 'https://i.ibb.co/K7FjB1T/Quiz-Game.png',
            link: 'https://lucent-hamster-33de2e.netlify.app/',
            'projectTitle': 'Quiz Game',
            'detail': ''
        },
        {
            image: 'https://i.ibb.co/xDj9Gj5/Tutorial-Academy.png',
            link: 'https://tutorial-academy.web.app/',
            'projectTitle': 'Tutorial Academy',
            'detail': 'Authentication System Using Google Firebase(email-password, google, facebook, github)User password reset option, email verification, userProfile update system Custom 404 page 6 different course tutorial Dark-light Mode'
        },
        {
            image: 'https://i.ibb.co/7YKJ1pH/Capture.png',
            link: 'https://wild-p-7252e.web.app/',
            'projectTitle': 'WildP',
            detail: 'Authentication System Using Google Firebase(email-password, google, facebook, github). User password reset option, email verification, userProfile update system. react-photo-view. 6+ different Photo Collection Add different Photo Collection using given email and password .Review option. Show all review in admin Add review, delete review'
        },
    ]
    return (
        <>
            <div className="hero-content text-center grid">
                <div className="mb-10">
                    <div className="heading-section">
                        <h1 className="big2 mt-2 mb-20 sm:hidden md:hidden lg:flex">Projects</h1>
                        <h2 className="text-6xl mb-12">My Projects</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 '>
                        {
                            cardItems.map(cardItem => <CardBody
                                key={cardItem.projectTitle}
                                cardItem={cardItem}
                            ></CardBody>)
                        }
                    </div>
                </div>
                <div className="h-48 my-4 w-full rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/Tw7YQPM/bg-1.jpg)` }}>
                    <div className="flex justify-center items-center h-48">
                        <div className="">
                            <h2 className='text-6xl'>I'm <span className='text-yellow-600'>Available</span> for working</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;