import React, { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import AuthContext from '../../context/AuthContext';
import registerImg from '../../assets/pexels-photo-9130253.jpeg'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error] = useState({})
    const navigate = useNavigate()
    const { createUser,setUser,updateUserProfile,signinWithGoogle } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        // name validation
        if (name.length < 5) {
            toast.warn('must be more the 5 character long', {
                position: "top-center",
                closeOnClick: true,
                transition: Zoom,
            })
            return
        }
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regex.test(password)) {
            toast.warn('Must be One Uppercase,One Lowercase,One Number ', {
                position: "top-center",
                closeOnClick: true,
                transition: Zoom,
            })
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    navigate('/')
                })
            })
            .catch(error => {
                error.message
            })
    }

    const handleGoogleSignin = () => {
        signinWithGoogle()
            .then(result => {
                result.user
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                error.message
            })
    }

    return (
        <div>
            <button className='text-red-500 rounded p-1 bg-white md:text-3xl '>
                <p className=''>Note: if you create image url(link).click this button and get direct link <button className='btn btn-accent'><a target='_blank' href="https://postimages.org/">Click me</a></button></p>
            </button>
            <ToastContainer></ToastContainer>
            <div className={`hero py-12 md:h-[800px] bg-cover justify-center items-center`} style={{backgroundImage: `url(${registerImg})`}}>
                <div className="hero-content flex-col md:flex-row-reverse  gap-0 ">
                    <div className="card bg-transparent border border-white backdrop-blur-[10px] md:w-[400px]  rounded-[10px]  shrink-0 ">
                        <form onSubmit={handleRegister} className="card-body justify-center items-center ">
                            <h1 className='text-2xl text-center font-semibold text-[#43aae2]'>Register your <span className='text-[#4DC879]'>Account</span></h1>
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered border-[#4DC879] md:w-76 w-64" required />
                            </div>
                            {
                                error.name && (
                                    <label className="label text-sm text-red-600">
                                        {error.name}
                                    </label>
                                )
                            }
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-[#4DC879] md:w-76  w-64" required />
                            </div>
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered border-[#4DC879] md:w-76 w-64" required />
                            </div>
                            <div className="form-control grid relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" className="input input-bordered border-[#4DC879] md:w-76  w-64" required />
                                {
                                    error.password && (
                                        <label className="label text-sm text-red-600">
                                            {error.password}
                                        </label>
                                    )
                                }

                                <button onClick={() => setShowPassword(!showPassword)} className=' text-xl absolute right-2 top-8'>
                                    {
                                        showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                    }
                                </button>
                            </div>
                            <p className=''>OR</p>
                            <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className="form-control  ">
                                <button className="btn bg-[#43aae2] text-xl text-[#FFF9EB] md:w-76">Register</button>
                            </div>
                        </form>
                        <p className='text-center pb-6'>All ready Have An Account ? <NavLink to='/login'><span className='text-[#f44848]'>Login</span></NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;