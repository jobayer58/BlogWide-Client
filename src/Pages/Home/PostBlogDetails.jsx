import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import userIcon from '../../assets/male.png';
import AuthContext from '../../context/AuthContext';
import Comment from './Comment';
import CommentsCard from './CommentsCard';

const PostBlogDetails = () => {
    const blogDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const { headline, imgUrl, description, category, author, publishDate, readTime, tags, readingLevel, language, _id } = blogDetails;
    const tagList = Array.isArray(tags) ? tags : tags.split(',');

    const fetchComments = async () => {
        const res = await fetch(`https://blog-wide-server.vercel.app/comment/${blogDetails._id}`);
        const data = await res.json();
        setComments(data);
    };

    useEffect(() => {
        fetchComments();
    }, [blogDetails._id]);

    return (
        <div key={_id} className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-2 md:py-0">
            <div className="bg-gradient-to-tr from-blue-50 via-sky-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden">
                <div className="h-[220px] sm:h-[300px] md:h-[550px] rounded-t-2xl overflow-hidden">
                    <img
                        src={imgUrl}
                        alt="Blog"
                        className="w-full h-full object-cover transition hover:scale-105 duration-500"
                    />
                </div>
                <div className="p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-6">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-snug text-gray-800">{headline}</h1>

                    <div className="flex items-center gap-3">
                        <img
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-sky-200 shadow"
                            src={blogDetails.userImage || userIcon}
                            alt="Author"
                        />
                        <div>
                            <h4 className="font-semibold text-base sm:text-lg text-blue-700">{author}</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">Published: {publishDate}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{description}</p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {tagList.map((tag, index) => (
                            <span key={index} className="px-3 py-1 rounded-full text-xs sm:text-sm bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700">
                                #{tag.trim()}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 text-gray-600 text-xs sm:text-sm">
                        <p><span className="font-medium">Category:</span> <span className="text-blue-700">{category}</span></p>
                        <p><span className="font-medium">Read Time:</span> <span className="text-blue-700">{readTime}</span></p>
                        <p><span className="font-medium">Level:</span> <span className="text-blue-700">{readingLevel}</span></p>
                        <p><span className="font-medium">Language:</span> <span className="text-blue-700">{language}</span></p>
                    </div>

                    <div className="pt-3">
                        {user?.email === blogDetails?.userEmail ? (
                            <Link to={`/blogs/update/${blogDetails._id}`}>
                                <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-sky-500 text-white font-semibold shadow hover:scale-105 transition">
                                    Update
                                </button>
                            </Link>
                        ) : (
                            <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed" disabled>
                                Update
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-10 md:mt-16">
                {user?.email !== blogDetails?.userEmail && (
                    <Comment blogId={_id} fetchComments={fetchComments} />
                )}
            </div>

            <div className="mt-10 md:mt-16">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 text-blue-600">Total Comments ({comments.length})</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {comments.map((com) => (
                        <CommentsCard key={com._id} com={com} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostBlogDetails;
