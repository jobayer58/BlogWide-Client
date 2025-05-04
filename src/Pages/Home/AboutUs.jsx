import React from 'react';
import aboutImg from '../../assets/bird4.jpeg'

const AboutUs = () => {
    return (
        <div>
            <section className=" bg-cover bg-center md:h-[550px] w-full object-cover bg-gray-100 py-16 px-5 lg:px-20 flex items-center justify-center" style={{backgroundImage: `url(${aboutImg})`}}>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">About BlogWide</h2>
                    <p className="text-lg text-gray-900 mb-10 leading-relaxed">
                        BlogWide is your destination for exploring ideas, discovering stories, and connecting with a world of perspectives.
                        We believe in the power of words to inform, inspire, and ignite minds. Whether you're a passionate writer or an
                        avid reader, BlogWide offers a platform to express, learn, and grow.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower voices through digital storytelling and provide a space where ideas flourish and communities thrive.
                            </p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">What We Offer</h3>
                            <p className="text-gray-600">
                                High-quality blogs, insightful articles, and engaging content across multiple categories — from tech to lifestyle.
                            </p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why BlogWide?</h3>
                            <p className="text-gray-600">
                                Because we value authentic content, clean design, and a smooth user experience — made by creators, for readers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;