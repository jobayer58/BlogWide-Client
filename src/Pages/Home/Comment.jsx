import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import commentImg from '../../assets/post1.jpeg'

const Comment = ({ blogId, fetchComments }) => {
    const {user} =useContext(AuthContext)

    const handleSendComment = async e => {
        e.preventDefault()
        const commentData = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            blogId: blogId,
            comment: e.target.comment.value,
            date: new Date(),
          };
        
          const res = await fetch('https://blog-wide-server.vercel.app/comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData),
          });
        
          const data = await res.json();
          if (data.insertedId) {
            toast('🦄 Wow Your comment submit successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
            e.target.reset();
            fetchComments(); 
          }
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="justify-center items-center flex mx-auto md:grid-cols-2 gap-8 pt-5 pb-16 md:px-0 px-3 ">
                <div className='border lg:w-[800px] bg-cover rounded-md' style={{backgroundImage: `url(${commentImg})`}}>
                    <h2 className="md:text-3xl text-center pt-4 text-white font-bold mb-4">Send Comment This Blog</h2>
                    <form onSubmit={handleSendComment} className="space-y-4 p-4 bg-transparent backdrop-blur-[20px] text-white">
                        <textarea
                            placeholder="Your Comment"
                            className="w-full px-4 py-2 md:py-6 border border-gray-400 rounded"
                            rows=""
                            required
                            name='comment'
                        ></textarea>
                        <button type='submit' className='btn btn-outline btn-success'>Submit Comments</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Comment;