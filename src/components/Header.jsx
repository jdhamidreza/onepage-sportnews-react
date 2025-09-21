import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='shadow-2xl h-[60px] w-full bg-white z-50 relative'>
            <div className='container mx-auto flex justify-between items-center h-full px-4'>
                
                {/* لوگو */}
                <h2 className="text-lg font-bold">Sport Snap</h2>

                {/* منو دسکتاپ */}
                <ul className='hidden lg:flex gap-4'>
                    <li><Link to="/" className="hover:text-[#262626] transition-colors">Home</Link></li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer'>Category</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer'>Trending News</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer'>Recent News</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer'>Clubs Ranking</li>
                    <li><Link to="/sports-news" className="text-[#2626269d] hover:text-[#262626] transition-colors">Sports Article</Link></li>
                </ul>

                {/* دکمه سرچ دسکتاپ */}
                <div className='hidden lg:flex mt-2'>
                    <button className='flex items-center gap-3 p-[10px] bg-[#B8C2CE] rounded-lg w-[100px] h-[35px]'>
                        <CiSearch /> Search
                    </button>
                </div>

                {/* منو موبایل */}
                <div className='lg:hidden flex items-center gap-3'>
                    <button className='mt-2'>
                        <CiSearch size={24} />
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </div>

            {/* لیست موبایل */}
            {isOpen && (
                <ul className='lg:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200'>
                    <li><Link to="/" className="hover:text-[#262626] transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer' onClick={() => setIsOpen(false)}>Category</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer' onClick={() => setIsOpen(false)}>Trending News</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer' onClick={() => setIsOpen(false)}>Recent News</li>
                    <li className='text-[#2626269d] hover:text-[#262626] transition-colors cursor-pointer' onClick={() => setIsOpen(false)}>Clubs Ranking</li>
                    <li><Link to="/sports-news" className="text-[#2626269d] hover:text-[#262626] transition-colors" onClick={() => setIsOpen(false)}>Sports Article</Link></li>
                </ul>
            )}
        </header>
    );
};

export default Header;
