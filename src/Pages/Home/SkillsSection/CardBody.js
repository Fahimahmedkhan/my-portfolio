import React from 'react';

const CardBody = ({ cardItem }) => {
    const { icon, cardTitle } = cardItem;
    return (
        <div className="card lg:card-side bg-base-300 shadow-xl hover:bg-yellow-500 hover:text-black py-4 rounded-lg">
            <div className="card-body flex justify-center items-center">
                {icon}
                <h2 className="card-title text-4xl ">{cardTitle}</h2>
            </div>
        </div>
    );
};

export default CardBody;