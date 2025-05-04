import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBlog = () => {

    const updateBlogs = useLoaderData()
    const { headline, imgUrl, description, shortDescription, category, author, publishDate, readTime, tags, readingLevel, language, _id, userEmail ,userImage} = updateBlogs

    const navigate = useNavigate();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${_id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [_id]);

    const handleUpdate = e => {
        e.preventDefault()
    
        const form = e.target
        const updatedBlog = {
            headline: form.headline.value,
            imgUrl: form.imgUrl.value,
            author: form.author.value,
            description: form.description.value,
            shortDescription: form.shortDescription.value,
            category: form.category.value,
            language: form.language.value,
            publishDate: form.publishDate.value,
            readTime: form.readTime.value,
            tags: form.tags.value,
            readingLevel: form.readingLevel.value,
            userEmail: form.email.value,
            userImage: form.userImage.value,
        };

        fetch(`http://localhost:5000/blogs/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBlog),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Sports Equipment update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/allBlogs');
                } else {
                    Swal.fire({
                        title: "No Changes",
                        text: "No modifications were made",
                        icon: "info",
                        confirmButtonText: "Okay",
                    });
                }
            })
            .catch((error) => {
                error.message
            });
    }

    return (
        <div className='lg:p-10 p-4  md:p-6 bg-cover' style={{ backgroundImage: "url('../../src/assets/addBlog.jpg')" }}>
            <button className='text-red-500 rounded p-1 bg-white md:text-3xl '>
                <p className=''>Note: if you create image url(link).click this button and get direct link <button className='btn btn-accent'><a target='_blank' href="https://postimages.org/">Click me</a></button></p>
            </button>
            <form onSubmit={handleUpdate} className='pt-10 md:p-10 p-2 bg-transparent backdrop-blur-[20px]'>
                <h1 className='text-center text-2xl'>You can update your blog if you want</h1>
                {/* form row-1 */}
                <div className=' md:flex gap-8'>
                    {/* Author name */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white font-normal text-[16px]">Author Name</legend>
                            <input required defaultValue={author} type="text" name='author' className="input w-full" placeholder="Your Name" />
                        </fieldset>
                    </div>
                    {/* Blogs Title */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white font-normal text-[16px]">Blog Name </legend>
                            <input type="text" defaultValue={headline} required name='headline' className="input w-full" placeholder="Blog Headline" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-2 */}
                <div className=' md:flex gap-8'>
                    {/* Blog Category*/}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white text-xl">Blog Category</label>
                            <select defaultValue={category} name='category' className="select w-full">
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
                            <select defaultValue={language} name='language' className="select w-full">
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
                            <input type="date" defaultValue={publishDate} name='publishDate' className="input w-full" placeholder="Deadline" required />
                        </fieldset>
                    </div>
                    {/* Reading Level */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-normal text-[16px] text-white ">Reading Level</label>
                            <select defaultValue={readingLevel} name='readingLevel' className="select w-full">
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
                            <input defaultValue={userEmail} type="text" required name='email' className="input w-full" placeholder="Author Email" />
                        </fieldset>
                    </div>
                    {/* Author Photo */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend font-normal text-[16px] text-white">Author Photo(your photo link)</legend>
                        <input defaultValue={userImage} type="text" required name='userImage' className="input w-full" placeholder="Author Photo(your photo link)" />
                        </fieldset>
                    </div>
                </div>
                {/* form row-5 */}
                <div className=' md:flex gap-8'>
                    {/* Blog image */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-normal text-[16px] text-white">Blog Image URL</legend>
                            <input type="text" defaultValue={imgUrl} required name='imgUrl' className="input w-full" placeholder="Blog Image URL(image link)" />
                        </fieldset>
                    </div>
                    {/* Reading Time */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-normal text-[16px] text-white">Reading time </legend>
                            <input type="text" defaultValue={readTime} name='readTime' className="input w-full" placeholder="The Average Time Of your Blog!" />
                        </fieldset>
                    </div>
                </div>
                <div>
                    {/* Blog Short Description */}
                    <label className="fieldset-label text-white">Blog Short Description</label>
                    <textarea defaultValue={shortDescription} className="textarea w-full" name='shortDescription' required placeholder="put your Blog related short description"></textarea>
                    {/* Blog Tags */}
                    <label className="fieldset-label text-white">Blog Tags</label>
                    <textarea defaultValue={tags} className="textarea w-full" name='tags' required placeholder="put blog related tags"></textarea>
                    {/* Blog Details Description */}
                    {/* text-[#07bc0c] */}
                    <label className="fieldset-label text-white">Blog Details Description</label>
                    <textarea defaultValue={description} className="textarea w-full" name='description' required placeholder="put blog related details Description"></textarea>
                </div>
                <input type="submit" value="Update Blogs" className="btn mt-8 text-xl btn-outline btn-success w-full" />
            </form>
        </div>
    );
};

export default UpdateBlog;