import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleAddBlog = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { ...newBlogs } = initialData
        newBlogs.tags = newBlogs.tags.split('\n')

        Swal.fire({
            title: "Are you sure?",
            text: "Do You want To Submit Your Blog!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/blogs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newBlogs)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Submitted!",
                                text: "Your Blog has been Properly Submitted.",
                                icon: "success"
                            });
                            navigate('/allBlogs');
                        }
                    })

            }
        })
    }

    return (
        <div className='lg:p-10 p-4  md:p-6 bg-cover' style={{ backgroundImage: "url('../../src/assets/addBlog.jpg')" }}>
            <button className='text-red-500 rounded p-1 bg-white md:text-3xl '>
                <p className=''>Note: if you create image url(link).click this button and get direct link <button className='btn btn-accent'><a target='_blank' href="https://postimages.org/">Click me</a></button></p>
            </button>
            <form onSubmit={handleAddBlog} className='pt-10 md:p-10 p-2 bg-transparent backdrop-blur-[20px]'>
                <h1 className='text-center text-2xl'>Add Your Blog Item</h1>
                {/* form row-1 */}
                <div className=' md:flex gap-8'>
                    {/* Author name */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend !text-white font-normal text-[16px]">Author Name</legend>
                            <input required defaultValue={user?.displayName} type="text" name='author' className="input w-full" placeholder="Your Name" />
                        </fieldset>
                    </div>
                    {/* Blogs Title */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend !text-white font-normal text-[16px]">Blog Name </legend>
                            <input type="text" required name='headline' className="input w-full" placeholder="Blog Headline" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-2 */}
                <div className=' md:flex gap-8'>
                    {/* Blog Category*/}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white text-xl">Blog Category</label>
                            <select defaultValue='Pick a Blog Category' name='category' className="select w-full">
                                <option disabled >Pick a Blog Category</option>
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Education</option>
                                <option>Technology</option>
                            </select>
                        </fieldset>
                    </div>
                    {/* Blog Language*/}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white text-xl">Blog Language</label>
                            <select defaultValue='Pick a Blog Language' name='language' className="select w-full">
                                <option disabled >Pick a Blog Language</option>
                                <option>English</option>
                                <option>Bangla</option>
                                <option>Others</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                {/* form row-3 */}
                <div className=' md:flex gap-8'>
                    {/* Blog Publish Date */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white">Blog Publish Date</label>
                            <input type="date" name='publishDate' className="input w-full" placeholder="Deadline" required />
                        </fieldset>
                    </div>
                    {/* Reading Level */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white ">Reading Level</label>
                            <select defaultValue='Pick a Reding Level' name='readingLevel' className="select w-full">
                                <option disabled >Pick a Reading Level</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Beginner</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                {/* form row-4 */}
                <div className=' md:flex gap-8'>
                    {/* Author Email */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-normal text-[16px] text-white">Author Email</legend>
                            <input defaultValue={user?.email} type="text" required name='userEmail' className="input w-full" placeholder="Author Email" />
                        </fieldset>
                    </div>
                    {/* isFeatured */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend font-normal text-[16px] text-white">Author Photo(your photo link)</legend>
                        <input defaultValue={user?.photoURL} type="text" required name='userImage' className="input w-full" placeholder="Author Photo(your photo link)" />
                        </fieldset>
                    </div>
                </div>
                {/* form row-5 */}
                <div className=' md:flex gap-8'>
                    {/* Blog image */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-normal text-[16px] text-white">Blog Image URL</legend>
                            <input type="text" required name='imgUrl' className="input w-full" placeholder="Blog Image URL(image link)" />
                        </fieldset>
                    </div>
                    {/* Reading Time */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-normal text-[16px] text-white">Reading time </legend>
                            <input type="text" name='readTime' className="input w-full" placeholder="The Average Time Of your Blog!" />
                        </fieldset>
                    </div>
                </div>
                <div>
                    {/* Blog Short Description */}
                    <label className="fieldset-label text-white">Blog Short Description</label>
                    <textarea className="textarea w-full" name='shortDescription' required placeholder="put your Blog related short description"></textarea>
                    {/* Blog Tags */}
                    <label className="fieldset-label text-white">Blog Tags</label>
                    <textarea className="textarea w-full" name='tags' required placeholder="put blog related tags"></textarea>
                    {/* Blog Details Description */}
                    <label className="fieldset-label text-white">Blog Details Description</label>
                    <textarea className="textarea w-full" name='description' required placeholder="put blog related details Description"></textarea>
                </div>
                <input type="submit" value="Add Blogs" className="btn mt-8 text-xl btn-outline btn-success w-full" />
            </form>
        </div>
    );
};

export default AddBlog;