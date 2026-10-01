import { WorkoutType } from '@/app/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdDownloadDone, MdEventAvailable } from 'react-icons/md';

interface WorkoutDetailCardProps {
    workoutData: WorkoutType;
}

const WorkoutDetailCard = ({ workoutData }: WorkoutDetailCardProps) => {
    return (
        <div className='container mx-auto flex justify-around items-center bg-base-100 shadow-2xl shadow-[#C2F800]'>
            <div>
                <Image src={workoutData.image} width={600} height={600} alt='image'></Image>
            </div>

            <div className='space-y-2.5'>
                <h2 className='text-4xl font-extrabold'>
                    {workoutData.name}
                </h2>
                <h2>
                    {workoutData.description}
                </h2>
                <div className='flex gap-2.5 mt-2'>
                    {workoutData.muscleGroups.length >= 2 ?
                        <>
                            <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workoutData.muscleGroups[0]}</h2>
                            <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workoutData.muscleGroups[1]}</h2>
                        </>
                        :
                        <>
                            <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workoutData.muscleGroups[0]}</h2>
                        </>
                    }
                </div>

                <div className='border border-gray-300 rounded-2xl p-3 space-y-1'>
                    <div className='flex justify-between'>
                        <h2>EQUIPMENT: </h2>
                        <h2>{workoutData.equipment}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>DIFFICULTY: </h2>
                        <h2>{workoutData.difficulty}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>SETS: </h2>
                        <h2>{workoutData.sets}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>REPS: </h2>
                        <h2>{workoutData.reps}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>DURATION: </h2>
                        <h2>{workoutData.duration} min</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>CALORIES: </h2>
                        <h2>{workoutData.caloriesBurned} kcal</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>RATING: </h2>
                        <h2>{workoutData.rating}</h2>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold mb-2'>INSTRUCTIONS</h2>
                    <ol className='space-y-2'>
                        {workoutData.instructions.map((instruction, index) => (
                            <li key={index}>{index + 1}. {instruction}</li>
                        ))}
                    </ol>
                </div>

                <div className='flex gap-4'>
                    <Link href={'/workouts'} className="btn btn-xs bg-[#C2F800] rounded-2xl border-0 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        <MdEventAvailable/>Add to today&apos;s plan
                    </Link>
                    <Link href={'/workouts'} className="btn btn-xs bg-[#C2F800] rounded-2xl border-0 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        <MdDownloadDone />Save for later
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailCard;