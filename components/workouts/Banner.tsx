import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='container mx-auto mt-10 mb-20 p-10 bg-gray-400 rounded-4xl text-gray-50'>
            <div className='flex justify-between items-center m-10'>
                <div className='space-y-3'>
                    <p>
                        <span className='bg-[#1A2312] rounded-2xl text-[#C2F800] p-1.25 text-sm'> WORKOUT LIBRARY</span>
                    </p>
                    <h2 className='font-extrabold text-5xl'>
                        TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h2>
                    <p className='text-gray-700'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <div>
                        <Link href={'/workouts'} className="btn btn-xs bg-[#C2F800] border-0 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        BROWSE WORKOUTS
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={bannerImage} alt='banner-image' width={300} height={300}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;