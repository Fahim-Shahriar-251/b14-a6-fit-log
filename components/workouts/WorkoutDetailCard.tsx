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
        <div className='container mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-base-100 shadow-sm shadow-[#C2F800]'>

            {/* Image */}
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image
                    src={workoutData.image}
                    width={600}
                    height={600}
                    alt={workoutData.name}
                    className='w-full max-w-125 h-auto object-cover rounded-xl'
                />
            </div>

            {/* Details */}
            <div className='w-full md:w-1/2 space-y-3'>

                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold'>
                    {workoutData.name}
                </h2>

                <p className='text-sm sm:text-base'>
                    {workoutData.description}
                </p>

                {/* Muscle Groups */}
                <div className='flex flex-wrap gap-2 pt-1'>
                    {workoutData.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className='bg-[#C2F800] font-semibold rounded-xl px-3 py-1 text-sm'
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Information */}
                <div className='border border-gray-300 rounded-2xl p-3 sm:p-4 space-y-2'>
                    <div className='flex justify-between gap-4'>
                        <h2>EQUIPMENT:</h2>
                        <h2 className='font-semibold text-right'>{workoutData.equipment}</h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>DIFFICULTY:</h2>
                        <h2 className='font-semibold text-right'>{workoutData.difficulty}</h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>SETS:</h2>
                        <h2 className='font-semibold text-right'>{workoutData.sets}</h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>REPS:</h2>
                        <h2 className='font-semibold text-right'>{workoutData.reps}</h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>DURATION:</h2>
                        <h2 className='font-semibold text-right'>
                            {workoutData.duration} min
                        </h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>CALORIES:</h2>
                        <h2 className='font-semibold text-right'>
                            {workoutData.caloriesBurned} kcal
                        </h2>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <h2>RATING:</h2>
                        <h2 className='font-semibold text-right'>
                            {workoutData.rating}
                        </h2>
                    </div>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className='font-bold mb-2'>INSTRUCTIONS</h2>

                    <ol className='space-y-2 text-sm sm:text-base'>
                        {workoutData.instructions.map((instruction, index) => (
                            <li key={index}>
                                {index + 1}. {instruction}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 pt-2'>
                    <Link
                        href='/workouts'
                        className='btn w-full sm:w-auto bg-[#C2F800] rounded-2xl border-0'
                    >
                        <MdEventAvailable />
                        Add to today&apos;s plan
                    </Link>

                    <Link
                        href='/workouts'
                        className='btn w-full sm:w-auto bg-[#C2F800] rounded-2xl border-0'
                    >
                        <MdDownloadDone />
                        Save for later
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default WorkoutDetailCard;