import React from 'react';
    
const Navbar = () => {
    return (
        <nav className='bg-black h-20 '>
            <div className='container mx-auto flex items-center h-full '>
                <div className='flex text-abu-100 items-center gap-1 hover:text-white cursor-pointer'>
                <img className='w-6' src="https://i.pinimg.com/originals/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg" alt="" />
                <p>Menu</p>
                </div>
                <p className='ml-10 text-abu-100 hover:text-white cursor-pointer mr-10'>About Us</p>
                <input type="text" class=" px-4 py-1 focus:outline-none focus:ring-2 focus:ring-biru-100 focus:border-biru-100 bg-black text-white" placeholder="Search..."/>
            </div>
        </nav>
    );
};

export default Navbar;