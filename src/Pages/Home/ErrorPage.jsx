import React from 'react';
import error from '../../assets/error-page.jpeg'

const ErrorPage = () => {
    return (
        <div className='mx-auto  flex justify-center items-center'>
            <img  className='w-11/12 py-2 h-[720px] object-cover' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;