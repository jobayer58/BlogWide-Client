import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/icons8-movies-portal-100.png'
import AuthContext from '../context/AuthContext';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addBlog'>Add Blog</NavLink>
        <NavLink to='/allBlogs'>All BLogs</NavLink>
        <NavLink to='/features'>Features</NavLink>
        <NavLink to='/wishList'>Wish List</NavLink>
    </>
    return (
        // className='object-cover w-full h-auto bg-cover overflow-hidden' style={{backgroundImage: "url('../../src/assets/pexels-photo-2049422.jpeg')"}}
        <div >
            <div className="">
                <div className="navbar flex justify-around items-center">
                    <div className="flex flex-row-reverse w-full lg:w-auto justify-between items-center md:px-8 px-2">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:h-9 md:w-9 h-7 w-7 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-5 py-4 shadow right-0 left-auto">
                                {links}
                                {
                                    user && user?.email ?
                                        <button onClick={logOut} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2  md:py-6 py-1 md:text-[20px] `}>LOGOUT</button>
                                        :
                                        <Link to='login' className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2 md:py-6 py-2 md:text-[20px]`}>LOGIN</Link>
                                }
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className=" md:h-24 md:w-24 h-16 w-16 object-cover" src={logo} alt="" />
                            <h1 className='text-2xl'>BlogWide</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-7 text-xl font-sans ">
                            {links}
                        </ul>
                    </div>
                    <div className="lg:inline hidden">
                        <div className=" flex justify-center items-center md:gap-4 gap-1">
                            {
                                user?.email && <div><img data-tooltip-id="logo-img-tooltip" className="md:w-14 md:h-14 w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt="" />
                                    <Tooltip id="logo-img-tooltip" place="left" effect="solid">
                                        {
                                            user?.displayName
                                        }
                                    </Tooltip>
                                </div>

                            }
                            {
                                user && user?.email ?
                                    <button onClick={logOut} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2  md:py-6 py-1 md:text-[20px] `}>LOGOUT</button>
                                    :
                                    <Link to='login' className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2 md:py-6 py-2 md:text-[20px]`}>LOGIN</Link>
                            }
                            <label className="flex items-center cursor-pointer">
                                {/* <input
                                        type="checkbox"
                                        className="toggle theme-controller"
                                        checked={theme === "dark"}
                                        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                                    /> */}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;