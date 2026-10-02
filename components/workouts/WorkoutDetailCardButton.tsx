'use client'
import { MyPlansContext } from '@/app/context/MyPlansContext';
import { WorkoutType } from '@/app/type';
import React, { useContext } from 'react';
import { MdDownloadDone, MdEventAvailable } from 'react-icons/md';
import { toast } from 'react-toastify';

const WorkoutDetailCardButton = ({ workoutData }: { workoutData: WorkoutType }) => {

    const myPlansProvider = useContext(MyPlansContext);

    const handleTodaysPlan = () => {
        const alreayExists = myPlansProvider.todaysPlans.some(
            (plan) => plan.id === workoutData.id
        );
        if (alreayExists) {
            toast.error("Already exists!");
            return;
        }
        myPlansProvider.setTodaysPlans([...myPlansProvider.todaysPlans, workoutData]);
        toast.success("Successfully added to today's plan!")
    }

    const handleSavedPlan = () => {
        const alreayExists = myPlansProvider.savedPlans.some(
            (plan) => plan.id === workoutData.id
        );
        if(alreayExists){
            toast.error("Already exists!");
            return;
        }
        myPlansProvider.setSavedPlans([...myPlansProvider.savedPlans, workoutData]);
        toast.success("Successfully saved!")
    }


    return (
        <div className='flex flex-col sm:flex-row gap-3 pt-2'>
            <button
                onClick={handleTodaysPlan}
                className='btn w-full sm:w-auto bg-[#C2F800] rounded-2xl border-0'
            >
                <MdEventAvailable />
                Add to today&apos;s plan
            </button>

            <button
                onClick={handleSavedPlan}
                className='btn w-full sm:w-auto bg-[#C2F800] rounded-2xl border-0'
            >
                <MdDownloadDone />
                Save for later
            </button>
        </div>
    );
};

export default WorkoutDetailCardButton;