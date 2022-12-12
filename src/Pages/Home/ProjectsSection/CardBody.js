import React from 'react';

const CardBody = ({ cardItem }) => {
    const { image, link, projectTitle, detail } = cardItem;
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <div className="hero h-auto rounded-lg " style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{projectTitle}</h1>
                        <div className="mb-5">{detail}</div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default CardBody;