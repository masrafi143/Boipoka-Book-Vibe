import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex items-center justify-between w-11/12 md:w-10/12 mx-auto bg-[#f3f3f3] p-6 md:px-10 md:py-15 gap-5 md:gap-10 rounded-2xl my-10'>
            <div className='space-y-5'>
                <h2 className='font-semibold text-3xl md:text-5xl text-black'>Books to freshen up your bookshelf</h2>
                <button className='btn bg-[#23BE0A] text-white font-bold rounded-lg'>View The List</button>
            </div>
            <img className='rounded-2xl w-6/12 md:w-5/12' src={bannerImg} alt="" />

        </div>
    );
};

export default Banner;