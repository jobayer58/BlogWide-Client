import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { toast, Slide, Zoom } from 'react-toastify';
import userIcon from '../../assets/male.png';
import { Fade } from 'react-awesome-reveal';

const PostBlogCard = ({ blog }) => {
    const { imgUrl, headline, shortDescription, category, author, _id } = blog;
    const { user } = useContext(AuthContext);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://blog-wide-server.vercel.app/wishList?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    const exists = data.some(item => String(item.originalId) === String(_id));
                    setIsAdded(exists);
                });
        }
    }, [user?.email, _id]);

    const handleAddToWishList = async () => {
        if (!user?.email) {
            toast.warn("Please log in first.", { position: "top-center", transition: Zoom });
            return;
        }
        if (isAdded) {
            toast.info("Already in wish list", { position: "top-center", transition: Slide });
            return;
        }
        const { _id, ...itemWithoutId } = blog;
        const itemWithUser = { ...itemWithoutId, userEmail: user.email, originalId: _id };
        const response = await fetch('https://blog-wide-server.vercel.app/wishList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemWithUser),
        });
        const data = await response.json();
        if (data.insertedId) {
            toast.success("Added to Wish List", { position: "top-center", transition: Slide });
            setIsAdded(true);
        }
    };

    return (
        <>
            <Fade delay={50} cascade damping={0.3}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-full w-full">
                    <div className="relative group overflow-hidden rounded-t-xl">
                        <img
                            src={imgUrl}
                            alt={headline}
                            className="w-full h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                            {category}
                        </span>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{headline}</h3>
                        <p className="text-gray-600 text-sm flex-grow">{shortDescription}</p>

                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src={userIcon}
                                alt={author}
                                className="w-10 h-10 rounded-full border-2 border-purple-300 object-cover"
                            />
                            <p className="text-gray-800 font-medium">{author}</p>
                        </div>

                        <div className="mt-auto flex justify-between items-center gap-4 pt-5">
                            <Link to={`/blogs/details/${_id}`}>
                                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full shadow-md hover:brightness-110 transition">
                                    Read More
                                </button>
                            </Link>
                            <button
                                onClick={handleAddToWishList}
                                disabled={isAdded}
                                className={`flex items-center gap-2 border-2 border-purple-600 text-purple-600 font-semibold px-4 py-2 rounded-full transition ${isAdded ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600 hover:text-white'
                                    }`}
                            >
                                Wish
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default PostBlogCard;
