import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full text-white py-20 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text:3xl text-2xl font-bold py-2'>Want to know more about the movie
                        world</h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className='my-4 '>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Enter your Email' className='p-3 h-[40px]flex w-full rounded-md text-black ' />
                        <button className='bg-[#0BC30BFF] w-[200px] h-[50px] md:h-[40px] rounded-md ml-4 my-6 px-6 py-3 '>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Newsletter;