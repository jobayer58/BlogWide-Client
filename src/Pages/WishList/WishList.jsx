import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

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

            <p className='md:text-2xl text-xl md:px-10 px-3 py-2'>My Collection List : ({wishItem.length}) Item</p>

            <div>
                {
                    wishItem.map(wish => )
                }
            </div>
        </div>
    );
};

export default WishList;