import React from 'react';

const Navbar = () => {
    const navLink = 
    <>
        <li className='m-2'>Home</li>
        <li className='m-2'>Listed Book</li>
        <li className='m-2'>Pages to Read</li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLink}
                </ul>
                </div>
                <a className="text-lg md:text-2xl font-bold">Booi Poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className="btn bg-[#23BE0A] text-white rounded-lg">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;