'use client'
import { MyPlansContext } from '@/app/context/MyPlansContext';
import { WorkoutType } from '@/app/type';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { MdDone } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface todaysPlanPropsType {
    todaysPlan: WorkoutType;
}

const TodaysPlanCardButton = ({ todaysPlan }: todaysPlanPropsType) => {

    const myPlanProvider = useContext(MyPlansContext);

    const [isClicked, setClicked] = useState(false);
    const handleMarkAsDone = () => {
        toast.success("Marked as done!");
        setClicked(true);
    }

    const handleDeleteMyPlan = (todaysPlan: WorkoutType) => {
        const updatedPlans = myPlanProvider.todaysPlans.filter(plan => {
            return plan.id != todaysPlan.id
        })
        myPlanProvider.setTodaysPlans(updatedPlans);
        toast.error(`Successfully removed ${todaysPlan.name} from today's plan`);
    }

    return (
        <div className='flex flex-col md:flex-row items-center gap-5'>
            <Link href={`workouts/${todaysPlan.id}`}
                className="bg-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800] p-3 rounded-2xl font-bold btn btn-xs sm:btn-sm md:btn-md">
                View Details
            </Link>
            <button
                onClick={handleMarkAsDone}
                disabled={isClicked}
                className="bg-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800] p-3 rounded-2xl font-bold btn btn-xs sm:btn-sm md:btn-md">
                <MdDone />Mark as done
            </button>
            <button
                onClick={() => handleDeleteMyPlan(todaysPlan)}>
                <RxCross1 className='text-3xl text-red-500 cursor-pointer' />
            </button>
        </div>
    );
};

export default TodaysPlanCardButton;