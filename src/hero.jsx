import React from 'react';
import {ReactTyped} from "react-typed";

export const textColor = 'text-[#0BC30BFF]';

const Hero = () => {

    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-0 top-0 w-full h-screen mx-auto ${text-center} flex flex-col justify-center '>
                <p className={`${textColor} text-center font-bold font-mono p-2 md:text-2xl `}>WATCH YOUR FAVOURITE MOVIE</p>
                <h1 className='md:text-7xl sm:text-6xl text-3xl md:py-6 font-monos text-center '>Watch On MovieVerse.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl font-mono mt-1'>
                        we have everything you like
                    </p>
                    <ReactTyped className={`md:text-5xl md:pl-5 sm:text-2xl mt-1.5 font-bold font-mono pl-2 ${textColor} overflow-ellipsis `}
                                strings={['SCI-FI', 'THRILLER', 'FANTASY', 'HORROR', 'COMEDY', 'ANIME', 'CLASSIC']}
                                typeSpeed={120} backSpeed={140} loop/>
                </div>
                <button className={`bg-[#0BC30BFF] w-[200px] h-[50px] rounded-md mx-auto md:mt-8 mt-8`}>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;