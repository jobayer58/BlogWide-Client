import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import WishListCard from './WishListCard';

const WishList = () => {

    const { user } = useContext(AuthContext)

    const [wishItem, setWishItem] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/wishList?email=${user.email}`)
                .then(res => res.json())
                .then(data => setWishItem(data));
        }
    }, [user]);

    return (
        <div>
            {
                user?.displayName && <h1 className='text-center text-2xl'>I Am {user?.displayName}</h1>
            }

            <p className='md:text-2xl text-xl md:px-10 px-3 py-2'>My Wish List : ({wishItem.length}) Item</p>
            <div className="overflow-x-auto w-full py-4 md:px-10 px-3">
                {/* Table Head */}
                <table className="min-w-[800px] w-full border border-gray-300 table-fixed ">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 w-[100px]">Image</th>
                            <th className="border border-gray-300 p-2 w-[150px]">Title</th>
                            <th className="border border-gray-300 p-2 w-[200px] truncate">Description</th>
                            <th className="border border-gray-300 p-2 w-[120px]">Category</th>
                            <th className="border border-gray-300 p-2 w-[120px]">Author</th>
                            <th className="border border-gray-300 p-2 w-[120px]">Publish Date</th>
                            <th className="border border-gray-300 p-2 w-[100px]">Language</th>
                            <th className="border border-gray-300 p-2 lg:w-[100px] w-[140px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishItem.map(wish => <WishListCard
                                key={wish._id}
                                wish={wish}
                                wishItem={wishItem}
                                setWishItem={setWishItem}
                            ></WishListCard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default WishList;