import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Slide, toast, ToastContainer } from 'react-toastify';

const AllBlogsCard = ({ blog }) => {
    const { imgUrl, headline, shortDescription, category, author ,_id} = blog
    const {user,loading} =useContext(AuthContext)

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/wishList?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    const exists = data.some(item => String(item._id) === String(_id));
                    setIsAdded(exists);
                })
                .catch(error => {
                    error.message
                });
        }
    }, [user?.email, _id]);

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    const handleAddToWishList = async () => {

        if (!user?.email) {
            alert("Please log in to add items to your list.");
            return;
        }

        if (isAdded) {
            toast.info("This Item All Ready added My Collection", {
                position: "top-center",
                closeOnClick: true,
                transition: Slide,
            });
            return;
        }

        const { _id, ...itemWithoutId } = blog;
        const itemWithUser = {
            ...itemWithoutId,
            userEmail: user.email,
            originalId: _id
        };


        const response = await fetch('http://localhost:5000/wishList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemWithUser)
        });
        const data = await response.json();
        if (data.insertedId) {
            toast("Added to My Collection Successfully!", {
                position: "top-center",
                closeOnClick: true,
                transition: Slide,
            });
        } else {
            toast.warn(data.message || "Something went wrong!");
        }
    };


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="card bg-base-100 h-full  shadow-sm">
                <figure>
                    <img className='w-full lg:h-80 md:h-64 h-48  object-cover'
                        src={imgUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {headline}
                    </h2>
                    <button className='btn'>{category}</button>
                    <p className=''>{shortDescription}</p>
                    <p className='text-xl'>Author: {author}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/blogs/details/${blog._id}`}>
                            <button className='btn btn-outline btn-info'>Details</button>
                        </Link>
                        <button onClick={handleAddToWishList} className="btn btn-outline btn-success">
                            Wish
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogsCard;