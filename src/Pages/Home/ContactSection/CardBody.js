import React from 'react';

const CardBody = ({ cardItem }) => {
    const { icon, cardTitle, details } = cardItem;
    return (
        <div className="card lg:card-side shadow-xl py-4 rounded-lg">
            <div className="card-body flex justify-center items-center">
                <div className='rounded-full w-28 h-28 bg-base-300 flex justify-center items-center'>
                    {icon}
                </div>
                <h2 className="card-title text-4xl ">{cardTitle}</h2>
                <h2 className="text-xl text-gray-600 ">{details}</h2>
            </div>
        </div>
    );
};

export default CardBody;