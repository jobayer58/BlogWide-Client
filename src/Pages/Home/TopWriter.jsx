import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopWriter = () => {

    const [topWriter, setTopWriter] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topWriter')
            .then(res => res.json())
            .then(data => setTopWriter(data));
    }, []);

    return (
        <div className='py-8'>
            <h1 className='text-3xl text-center pb-5 font-semibold'>Good writers on this BlogWide</h1>
            <div className='grid md:grid-cols-3 w-10/14 mx-auto gap-5 items-stretch'>
                {
                    topWriter.map(top =>
                        <div key={top._id} >
                            <div className="card bg-base-100 h-full shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={top.userImage}
                                        alt="Shoes"
                                        className="rounded-xl md:h-46 md:w-full object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{top.author}</h2>
                                    <h1 className='text-2xl font-bold'>{top.headline}</h1>
                                    <p>{top.shortDescription}</p>
                                    <div className="card-actions">
                                        <Link to={`/blogs/details/${top._id}`}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default TopWriter;