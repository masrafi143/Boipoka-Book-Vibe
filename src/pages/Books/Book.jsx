import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId, author, bookName, category, image, rating, tags, yearOfPublishing} = book;
    console.log(book);
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="w-full card bg-base-100 mx-auto shadow-lg h-full p-5 border border-gray-200 ">
                <figure className='bg-[#f3f3f3] py-5 rounded-2xl'>
                    <img className='h-[200px] w-[130px]'
                    src={image}
                    alt={bookName} />
                </figure>
                    <div className="card-actions  mt-5">
                    <div className="badge bg-[#23BE0A]/20 text-[#23BE0A] border border-[#23BE0A]/30 rounded-2xl font-semibold">{tags[0]}</div>
                    <div className="badge bg-[#23BE0A]/20 text-[#23BE0A] border border-[#23BE0A]/30 rounded-2xl font-semibold">{tags[1]}</div>
                    </div>
                <div className="space-y-2 mt-5">
                    <h2 className="card-title font-bold text-2xl">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className='font-semibold'>By: {author}</p>
                    <hr className="border-dashed text-gray-400" />

                    <div className='flex justify-between'>
                        <p>{category}</p>
                        <div className='flex items-center gap-2'>
                            <p>{rating}</p>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;