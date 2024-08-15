import React from 'react';
import data from './data.json'
import single from './assets/single.png';
import double from './assets/double.png';
import triple from './assets/triple.png';

const imageMap = {
    './assets/single.png': single,
    './assets/double.png': double,
    './assets/triple.png': triple
};

const Cards = () => {
    return (
        <div className='bg-white h-full w-screen py-16 flex justify-center'>
            <div className='grid md:grid-cols-3 w-[1200px] gap-8'>
                {data.map((card, index) =>
                    <div className='flex justify-center' key={index}>
                        <div className='text-center hover:rounded-md hover:pt-1 shadow-2xl w-[300px]  p-5 ease-in-out duration-200 hover:bg-gray-100 '>
                            <img className='h-[80px] w-[100px] md:ml-[60px] ml-[60px] ' src={imageMap[card.image]} alt="/"/>
                            <h1 className='font-bold font-mono text-3xl top-0 mt-5'>{card.title}</h1>
                            <h1 className='font-bold font-mono text-2xl py-5  '>{card.price}</h1>
                            <h2 className='font-mono text-2xs pt-3 pb-1  border-b'>{card.user}</h2>
                            <h2 className='font-mono text-2xs pt-3 pb-1 border-b'>{card.content}</h2>
                            <h2 className='font-mono text-2xs pt-3 pb-1 border-b'>{card.days}</h2>
                            <button className='bg-green-500 h-[50px] w-[120px] rounded-md mt-5'>Start Trial</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cards;