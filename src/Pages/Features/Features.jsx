import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const Features = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const columns = [
        {
          name:  (
            <span className="text-lg font-bold ">
              Blogs Name
            </span>
          ),
          sortable: true,
          grow: 2,
          cell: row => (
            <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
              <img src={row.imgUrl} alt="blog" className="w-30 h-20 object-cover rounded-md " />
              <div>
                <p className="font-semibold text-base">{row.headline}</p>
                <p className="text-sm text-gray-500">{row.category}</p>
              </div>
            </div>
          )
        },
        {
          name:  (
            <span className="text-lg font-bold ">
              Read Time
            </span>
          ),
          selector: row => row.readTime || 'N/A',
          sortable: true,
          cell: row => (
            <span className="text-sm md:text-base text-blue-600">{row.readTime || 'N/A'}</span>
          )
        },
        {
          name:  (
            <span className="text-lg font-bold ">
              Language
            </span>
          ),
          selector: row => row.language || 'N/A',
          sortable: true,
          cell: row => (
            <span className="text-sm md:text-base text-green-600">{row.language || 'N/A'}</span>
          )
        },
        {
            name:  (
                <span className="text-lg font-bold ">
                  Author
                </span>
              ),
            selector: row => row.author || 'N/A',
            sortable: true,
            cell: row => (
              <span className="text-sm md:text-base text-green-600">{row.author || 'N/A'}</span>
            )
        },
        {
          name:  (
            <span className="text-lg font-bold ">
              Word Count
            </span>
          ),
          selector: row => row.wordCount,
          sortable: true,
          right: true,
          cell: row => (
            <span className="font-medium  text-sm md:text-base">{row.wordCount}</span>
          )
        },
        {
          name:  (
            <span className="text-lg font-bold ">
              Action
            </span>
          ),
          cell: row => (
            <a
              href={`/blogs/details/${row._id}`}
              className="btn btn-sm btn-outline btn-info"
            >
              Details
            </a>
          )
        }
      ];
      

    const customStyles = {
        table: {
            style: {
                border: '1px solid #d1d5db', // Tailwind border-gray-300
            },
        },
        rows: {
            style: {
                borderBottom: '1px solid #e5e7eb', // Tailwind border-gray-200
                padding: '12px 0',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f9fafb', // Tailwind bg-gray-50
                fontWeight: 'bold',
            },
        },
        headCells: {
            style: {
                padding: '10px',
                color: '#1f2937', // Tailwind text-gray-800
            },
        },
        cells: {
            style: {
                padding: '10px',
            },
        },
    };

    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">📊 Top 10 Blogs </h1>

                {/* Responsive Scrollable Container */}
                <div className="overflow-x-auto">
                    <div className="min-w-[600px]"> {/* Prevent squishing on mobile */}
                        <DataTable
                            columns={columns}
                            data={blogs}
                            customStyles={customStyles}
                            striped
                            highlightOnHover
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;