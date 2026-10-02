'use client'
import { MyPlansContext } from '@/app/context/MyPlansContext';
import { WorkoutType } from '@/app/type';
import Link from 'next/link';
import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface savedPlanPropsType {
    savedPlan: WorkoutType;
}

const SavedPlanCardButton = ({ savedPlan }: savedPlanPropsType) => {
    const myPlanProvider = useContext(MyPlansContext);

    const handleDeleteSavedPlan = (savedPlan: WorkoutType) => {
        const updatedPlans = myPlanProvider.savedPlans.filter(plan => {
            return plan.id != savedPlan.id
        });
        myPlanProvider.setSavedPlans(updatedPlans);
        toast.error(`Successfully removed ${savedPlan.name} from today's plan`);
    }

    return (
        <div className='flex flex-col md:flex-row items-center gap-5'>
            <Link href={`workouts/${savedPlan.id}`}
                className="bg-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800] p-3 rounded-2xl font-bold btn btn-xs sm:btn-sm md:btn-md">
                View Details
            </Link>
            <button
                onClick={() => handleDeleteSavedPlan(savedPlan)}>
                <RxCross1 className='text-3xl text-red-500 cursor-pointer' />
            </button>
        </div>
    );
};

export default SavedPlanCardButton;