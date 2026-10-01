import { WorkoutType } from '@/app/type';
import Image from 'next/image';
import Link from 'next/link';

import { AiTwotoneFire } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';

interface WorkoutCardPropsType {
    workOut: WorkoutType;
}

const WorkoutCard = ({ workOut }: WorkoutCardPropsType) => {
    return (
        <Link href={`workouts/${workOut.id}`}>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-300">
                <div className='flex justify-center bg-gray-400'>
                    <Image src={workOut.image} alt='image' width={300} height={300}></Image>
                </div>
                <div className='space-y-1 p-5'>
                    <div className='flex gap-2.5 mt-2'>
                        {workOut.muscleGroups.length >= 2 ?
                            <>
                                <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workOut.muscleGroups[0]}</h2>
                                <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workOut.muscleGroups[1]}</h2>
                            </>
                            :
                            <>
                                <h2 className='bg-[#C2F800] font-semibold rounded-xl p-1.25'>{workOut.muscleGroups[0]}</h2>
                            </>
                        }
                    </div>
                    <h2 className='text-2xl font-extrabold'>
                        {workOut.name}
                    </h2>
                    <p>
                        {workOut.equipment}
                    </p>
                    <hr className='text-gray-200' />
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-1'>
                            <IoIosTimer className='text-xl' />
                            <h2>{workOut.duration}</h2>
                        </div>
                        <div className='flex items-center gap-1'>
                            <AiTwotoneFire />
                            <h2>{workOut.caloriesBurned}</h2>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegStar />
                            <h2>{workOut.rating}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;