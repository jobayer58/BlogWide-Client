import React from 'react';
import logoFooter from '../assets/icons8-movies-portal-100.png'
import fb from '../assets/fb-48.png'
import ins from '../assets/instagram-48.png'
import x from '../assets/twitter-48.png'
import yt from '../assets/youtube-48.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#000000]  text-[#ffffff] '>
                <div>
                    {/* upper text */}
                    <div className='py-10 text-center'>
                        <div className='space-y-7'>
                            <h1 className='text-4xl font-semibold text-[#ffffff]'>Let's Get Started</h1>
                            <p className='text-[#AEAEAE]'>Subscribe to receive updates, exclusive content, and more.</p>
                            <p className='text-[#AEAEAE]'>Your email is safe with us</p>
                        </div>
                        <div className='flex justify-center mt-2' >
                            <input className='py-[10px] lg:px-96  lg:pl-5 pl-2 border' type="email" placeholder='Enter your Email' id="" />
                            <button className=' bg-[#ffffff] text-[#000000]  font-semibold py-[10px] lg:px-5 px-3'>SUBSCRIBE</button>
                        </div>
                        <div className='flex justify-center mt-4 gap-3'>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100094378203638"><img src={fb} alt="" /></a>
                            <a target='_blank' href="https://www.instagram.com/jhankarmahbub/?hl=bn"><img src={ins} alt="" /></a>
                            <a target='_blank' href="https://x.com/jhankar_mahbub/status/1682216994953654272"><img src={x} alt="" /></a>
                            <a target='_blank' href="https://www.youtube.com/@JhankarMahbub"><img src=
                                {yt} alt="" /></a>
                        </div>

                    </div>
                    {/* bottom  text */}
                    <div className='lg:flex lg:justify-around items-start py-10'>
                        {/* 1 */}
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center'>
                                <img src={logoFooter} className='h-20 w-20 rounded-full object-cover ' alt="" />
                                <h1 className='text-2xl'>BlogWide</h1>
                            </div>
                            <p className='text-[#AEAEAE] text-center'>BlogWide is a dynamic blogging platform where voices find value.<span className='hidden md:inline'><br /></span> From tech insights to lifestyle tips, we empower creators to share <span className='hidden md:inline'><br /></span> knowledge and inspire readers worldwide.</p>
                        </div>
                        {/* 2 */}
                        {/* lg show */}
                        <div className='md:flex gap-36 md:pt-5 lg:pt-0 md:justify-around hidden'>
                            {/* support */}
                            <div className='space-y-4 '>
                                <h2>SUPPORT</h2>
                                <ul className='space-y-3 text-[#AEAEAE]'>
                                    <li>Contact Us</li>
                                    <li>Community Guidelines</li>
                                    <li>Privacy Policy</li>
                                    <li>Report a Problem</li>
                                </ul>
                            </div>
                            {/* ABOUT */}
                            <div className='space-y-4'>
                                <h1>ABOUT</h1>
                                <ul className='space-y-3 text-[#AEAEAE]'>
                                    <li>Who We Are</li>
                                    <li>Meet the Team</li>
                                    <li>Write for Us</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            {/* HELP */}
                            <div className='space-y-4'>
                                <h2>HELP</h2>
                                <ul className='space-y-3 text-[#AEAEAE]'>
                                    <li>Getting Started</li>
                                    <li>How to Blog</li>
                                    <li>FAQs</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>

                        </div>
                        {/* small device show */}
                        <div className='py-4 '>
                            {/* support */}
                            <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                                <div className="collapse-title font-semibold">SUPPORT</div>
                                <div className="collapse-content text-sm">
                                    <ul className='space-y-2 text-[#AEAEAE]'>
                                        <li>Contact Us</li>
                                        <li>Community Guidelines</li>
                                        <li>Privacy Policy</li>
                                        <li>Report a Problem</li>
                                    </ul>
                                </div>
                            </div>
                            {/*about  */}
                            <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                                <div className="collapse-title font-semibold">ABOUT</div>
                                <div className="collapse-content text-sm">
                                    <ul className='space-y-2 text-[#AEAEAE]'>
                                        <li>Who We Are</li>
                                        <li>Meet the Team</li>
                                        <li>Write for Us</li>
                                        <li>Careers</li>
                                    </ul>
                                </div>
                            </div>
                            {/* HELP */}
                            <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                                <div className="collapse-title font-semibold">HELP</div>
                                <div className="collapse-content text-sm">
                                    <ul className='space-y-3 text-[#AEAEAE]'>
                                        <li>Getting Started</li>
                                        <li>How to Blog</li>
                                        <li>FAQs</li>
                                        <li>Terms of Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h1 className='text-center py-2 text-sm text-[#AEAEAE]'> © 2025 BlogWide. Crafted with passion for the curious mind.</h1>
                </div>

            </div>
        </div>
    );
};

export default Footer;