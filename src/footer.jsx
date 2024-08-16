import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,} from "react-icons/fa";
import {FaSquareThreads} from "react-icons/fa6";
import {textColor} from "./hero";

const Footer = () => {
    return (
        <div className='md:h-[200px] py-4 w-full text-white font-mono md:grid md:grid-cols-2'>
            <div className='md:px-16'>
                <h1 className={`text-2xl font-mono ${textColor} p-4`}>MovieVerse.</h1>
                <p className='font-mono text-sm px-4 max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est
                    modi rem repellendus?
                    Aliquid commodi cumque, distinctio dolorem dolores facere, illo in incidunt itaque nostrum numquam
                    officia officiis vero!</p>
                <div className='flex p-4 text-white'>
                    <FaFacebookSquare className='text-3xl mx-2'/>
                    <FaInstagramSquare className='text-3xl mx-2'/>
                    <FaTwitterSquare className='text-3xl mx-2'/>
                    <FaSquareThreads className='text-3xl mx-2'/>
                </div>
            </div>
            <div  className='grid grid-cols-3 w-full ml-8 gap-2 md:pt-8'>
                <div>
                    <h1 className='font-medium text-gray-400'>Support</h1>
                    <ul className=''>
                        <li className='py-0.5 text-sm'>Help Center</li>
                        <li className='py-0.5 text-sm'>Terms of Service</li>
                        <li className='py-0.5 text-sm'>FAQ</li>
                        <li className='py-0.5 text-sm'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-0.5 text-sm'>About</li>
                        <li className='py-0.5 text-sm'>Blog</li>
                        <li className='py-0.5 text-sm'>Jobs</li>
                        <li className='py-0.5 text-sm'>Press</li>
                        <li className='py-0.5 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-0.5 text-sm'>Claim</li>
                        <li className='py-0.5 text-sm'>Policy</li>
                        <li className='py-0.5 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;