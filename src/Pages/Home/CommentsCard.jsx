import React from 'react';

const CommentsCard = ({ com }) => {
    const { name,  image, comment } = com
    return (
        <div className=''>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 ">
                <div className="text-center space-y-3">
                    <img
                        src={image}
                        alt={name}
                        className="w-20 h-20 rounded-full mx-auto object-cover "
                    />
                    <h3 className="font-semibold text-2xl">{name}</h3>
                </div>
                <p className="text-gray-700 mb-2 pt-2 text-center">{comment}</p>
            </div>
        </div>
    );
};

export default CommentsCard;