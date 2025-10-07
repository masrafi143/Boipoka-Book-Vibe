import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    console.log(books);
    const {id} = useParams();
    const booksId = parseInt(id);
    console.log(typeof booksId);

    const bookDetail = books.find(book => book.bookId === booksId);
    console.log(bookDetail);
    const {author, bookName, category, image, rating, tags, yearOfPublishing, review, publisher, totalPages} = bookDetail;
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='md:flex md:gap-10 items-stretch'>
                <div className='flex-1 flex justify-center items-center bg-[#f3f3f3] px-15 py-10 md:py-0 rounded-2xl'>
                    <img className='h-[60%] w-[60%] mx-auto object-contain' src={image} alt={bookName} />
                </div>
                <div className='flex-1 space-y-3 h-fit'>
                    <h1 className='font-bold text-3xl md:text-4xl'>{bookName}</h1>
                    <p className='font-semibold'>By: {author}</p>
                    <hr />
                    <p className='font-semibold'>{category}</p>
                    <hr />
                    <p><span className='font-bold'>Review: </span> {review}</p>
                    <div className='flex gap-3 items-center'>
                        <p className='font-bold'>Tag</p>
                        <div className="badge bg-[#23BE0A]/20 text-[#23BE0A] border border-[#23BE0A]/30 rounded-2xl font-semibold">{tags[0]}</div>
                        <div className="badge bg-[#23BE0A]/20 text-[#23BE0A] border border-[#23BE0A]/30 rounded-2xl font-semibold">{tags[1]}</div>
                    </div>
                    <hr />
                    <div className="flex gap-5">
                        <div className='space-y-2'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className='font-semibold space-y-2'>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-neutral btn-outline">Read</button>
                        <button className="btn bg-[#50b1c9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;