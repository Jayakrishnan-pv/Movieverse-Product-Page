import React from 'react';
import Laptop from './assets/laptop.jpg';
import {textColor} from "./hero";

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='w-[500px] mx-auto my-4   ' src={Laptop} alt="laptop"/>
                <div className='flex flex-col my-auto'>
                    <p className={`uppercase ${textColor} my-2 font-mono md:text-2xl`}>watch movies on the go</p>
                    <h1 className='uppercase font-bold md:text-4xl text-3xl my-2'>
                        watch from anywhere
                    </h1>
                    <p className='font-mono my-2'>
                        Lorem ipsum dolor sit amet. Et similique distinctio non reprehenderit fuga qui accusamus quasi
                        est deleniti ipsam.
                    </p>
                    <button className={`bg-black text-[#0BC30BFF] w-[200px] h-[50px] rounded-md mx-auto md:mt-8 md:ml-0 mt-8`}>Get
                        Started
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Analytics;