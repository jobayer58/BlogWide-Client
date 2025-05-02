import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const { user } = useContext(AuthContext)


    const handleAddBlog = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        // console.log(initialData);
        const {...newBlogs} = initialData
        newBlogs.tags = newBlogs.tags.split('\n')
        console.log(newBlogs);

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
                        position: "top-end",
                        icon: "success",
                        title: "Your Blog successfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });     
                }
            })
    }

    return (
        <div className='lg:p-10 p-4  md:p-6 bg-cover' style={{backgroundImage: "url('../../src/assets/addBlog.jpg')"}}>
            <button className='text-red-500 rounded p-1 bg-white md:text-3xl '>
                <p className=''>Note: if you create image url(link).click this button and get direct link <button className='btn btn-accent'><a target='_blank' href="https://postimages.org/">Click me</a></button></p>
            </button>
            <form onSubmit={handleAddBlog} className='pt-10 p-10 bg-transparent backdrop-blur-[20px]'>
            <h1 className='text-center text-2xl'>Add Your Blog Item</h1>
                {/* form row-1 */}
                <div className=' md:flex gap-8'>
                    {/* Author name */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend !text-black text-xl">Author Name</legend>
                            <input required defaultValue={user?.displayName} type="text" name='author' className="input w-full" placeholder="Your Name" />
                        </fieldset>
                    </div>
                    {/* Blogs Title */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend !text-black text-xl">Blog Name </legend>
                            <input type="text" required name='headline' className="input w-full" placeholder="Blog Headline" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-2 */}
                <div className=' md:flex gap-8'>
                    {/* Blog Category*/}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label text-black text-xl">Blog Category</label>
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
                            <label className="fieldset-label text-black text-xl">Blog Language</label>
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
                            <label className="fieldset-label text-black">Blog Publish Date</label>
                            <input type="date" name='publishDate' className="input w-full" placeholder="Deadline" required />
                        </fieldset>
                    </div>
                    {/* Reading Level */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <label className="fieldset-label text-black ">Reading Level</label>
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
                            <legend className="fieldset-legend !text-black">Author Email</legend>
                            <input defaultValue={user?.email} type="text" required name='email' className="input w-full" placeholder="Author Email" />
                        </fieldset>
                    </div>
                    {/* isFeatured */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                        <label className="fieldset-label text-black ">IsFeatured</label>
                            <select defaultValue='Pick a Reding Level' name='isFeatured' className="select w-full">
                                <option>True</option>
                                <option>False</option>   
                            </select>
                        </fieldset>
                    </div>
                </div>
                {/* form row-5 */}
                <div className=' md:flex gap-8'>
                    {/* Blog image */}
                    <div className='md:w-1/2 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Blog Image URL</legend>
                            <input type="text" required name='imgUrl' className="input w-full" placeholder="Blog Image URL(image link)" />
                        </fieldset>
                    </div>
                    {/* Reading Time */}
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Reading time </legend>
                            <input type="text" name='readTime' className="input w-full" placeholder="Reding time " />
                        </fieldset>
                    </div>
                </div>
                <div>
                    {/* Blog Short Description */}
                    <label className="fieldset-label text-black">Blog Short Description</label>
                    <textarea className="textarea w-full" name='shortDescription' required placeholder="put your Blog relative short description"></textarea>
                    {/* Blog Tags */}
                    <label className="fieldset-label text-black">Blog Tags</label>
                    <textarea className="textarea w-full" name='tags' required placeholder="put blog relative tags"></textarea>
                    {/* Blog Details Description */}
                    <label className="fieldset-label text-black">Blog Details Description</label>
                    <textarea className="textarea w-full" name='description' required placeholder="put blog relative details Description"></textarea>
                </div>
                <input type="submit" value="Add Blogs" className="btn mt-8 text-xl btn-outline btn-success w-full" />
            </form>
        </div>
    );
};

export default AddBlog;