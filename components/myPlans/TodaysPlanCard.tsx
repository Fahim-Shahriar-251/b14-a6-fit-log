import { WorkoutType } from '@/app/type';
import Image from 'next/image';
import React from 'react';
import TodaysPlanCardButton from './TodaysPlanCardButton';
import { IoIosTimer } from 'react-icons/io';
import { AiTwotoneFire } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';

interface todaysPlanPropsType {
    todaysPlan: WorkoutType;
}

const TodaysPlanCard = ({ todaysPlan }: todaysPlanPropsType) => {
    return (
        <div className='flex flex-col space-y-5 md:flex-row justify-between items-center mb-5 border rounded-2xl border-gray-300 p-3'>
            <div className='flex flex-col items-center md:flex-row gap-5'>
                <div>
                    <Image className='rounded-2xl' src={todaysPlan.image} alt='image' width={125} height={125}></Image>
                </div>
                <div className='space-y-1.5'>
                    <h2 className='font-extrabold text-2xl'>{todaysPlan.name}</h2>
                    <h2>{todaysPlan.equipment}</h2>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-1 text-'>
                            <IoIosTimer className='text-xl' />
                            <h2>{todaysPlan.duration} min</h2>
                        </div>
                        <div className='flex items-center gap-1'>
                            <AiTwotoneFire />
                            <h2>{todaysPlan.caloriesBurned} kcal</h2>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegStar />
                            <h2>{todaysPlan.rating}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TodaysPlanCardButton todaysPlan={todaysPlan}></TodaysPlanCardButton>
            </div>
        </div>
    );
};

export default TodaysPlanCard;