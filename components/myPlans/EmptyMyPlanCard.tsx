import Link from 'next/link';
import React from 'react';

const EmptyMyPlanCard = () => {
    return (
        <div className='text-center border border-gray-300 rounded-3xl p-18 space-y-4'>
            <h2 className='font-extrabold text-3xl'>NOTHING HERE YET</h2>
            <p>Browse the library and add a lift to get today moving.</p>
            <Link href={"/workouts"} className='bg-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800] p-3 rounded-4xl font-bold btn btn-xs sm:btn-sm md:btn-md lg:btn-xl'>
                Go to workouts
            </Link>
        </div>
    );
};

export default EmptyMyPlanCard;