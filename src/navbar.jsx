import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { textColor } from './hero';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-white flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
            <h1 className={`text-2xl md:text-3xl font-bold ${textColor}`}>MovieVerse.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>
            <div
                className={!nav ? 'fixed left-0 top-0 w-[60%] sm:w=[20%] h-full border-r border-r-gray-800 bg-[#171b1b] ease-in-out duration-500 ' : 'fixed left-[-100%] top-0 ease-in-out duration-500'}>
                {/*<h1 className="text-2xl md:text-3xl font-bold text-green-400 m-8">MovieVerse.</h1>*/}
                <ul className="uppercase p-4 mt-3">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;