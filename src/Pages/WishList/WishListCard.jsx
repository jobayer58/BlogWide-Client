import React from 'react';
import { Link } from 'react-router-dom';
import cancel from '../../assets/cancle.png'
import Swal from 'sweetalert2';

const WishListCard = ({ wish, wishItem, setWishItem }) => {

    const { headline, imgUrl, shortDescription, category, author, publishDate, language, _id } = wish

    const handleDeleteItem = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://blog-wide-server.vercel.app/wishList/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = wishItem.filter(col => col._id !== _id)
                            setWishItem(remaining)

                        }
                    })

            }
        });
    }

    return (

        <tr className="hover:bg-gray-50 text-center">
            <td className="border border-gray-300 p-2">
                <img src={imgUrl} className="h-24 w-full object-cover  rounded" />
            </td>
            <td className="border border-gray-300 p-2">{headline}</td>
            <td className="border border-gray-300 p-2 truncate">{shortDescription}</td>
            <td className="border border-gray-300 p-2">{category}</td>
            <td className="border border-gray-300 p-2">{author}</td>
            <td className="border border-gray-300 p-2">{publishDate}</td>
            <td className="border border-gray-300 p-2">{language}</td>
            <td className="border border-gray-300 p-2">
                <div className="flex gap-2">
                    <Link to='/allBlogs'>
                        <button className="btn btn-outline btn-info">Details</button>
                    </Link>
                    <button onClick={() => handleDeleteItem(_id)}>
                        <img src={cancel} alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default WishListCard;