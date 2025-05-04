import React from 'react';
import { Bounce, toast } from 'react-toastify';

const NewsLetter = () => {

    const handleSendMessage = (e) => {
        e.preventDefault()
        const form = e.target
        
        toast.success('Successfully Send Your message!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            form.reset();
    }

    return (
        <div >
            <div className="md:w-11/12 mx-auto grid md:grid-cols-2 gap-8 items-center justify-center pt-5 pb-16 md:px-0 px-3">
                <div className='shadow-md rounded-lg p-6'>
                    <h2 className="text-3xl font-bold mb-4">
                        Our Location
                    </h2>
                    <iframe
                        className="w-full h-64 md:h-96 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9011655226215!2d90.38542047535533!3d23.750883378689853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5d3f0dc6e9%3A0x9a43f632aeb2a5b5!2sStarbucks%20Coffee!5e0!3m2!1sen!2sbd!4v1711681012345"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className='shadow-md rounded-lg p-6'>
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <strong>Phone:</strong> +880 1234-567890
                    </p>
                    <p className="mb-2">
                        <strong>Email:</strong> BlogWidw@gmail.com
                    </p>
                    <p className="mb-4">
                        <strong>Address:</strong> 123, Bashundhara, Dhaka
                    </p>

                    <form onSubmit={handleSendMessage} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-400 rounded"
                            required
                            name='name'
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-gray-400 rounded"
                            required
                            name='email'
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-2 md:py-6 border border-gray-400 rounded"
                            rows=""
                            required
                            name='message'
                        ></textarea>
                        <button type='submit' className='btn btn-outline btn-success'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;