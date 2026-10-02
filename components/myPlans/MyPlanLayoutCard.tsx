'use client'
import { MyPlansContext } from '@/app/context/MyPlansContext';
import React, { useContext } from 'react';


const MyPlanLayoutCard = () => {

    const myPlanProvider = useContext(MyPlansContext);

    let exercises = 0, minutes = 0, calories = 0;
    if (myPlanProvider.activeTab === "todaysPlan") {
        exercises = myPlanProvider.todaysPlans.length;
        minutes = myPlanProvider.todaysPlans.reduce((min, plan) => {
            min += plan.duration;
            return min;
        }, 0);
        calories = myPlanProvider.todaysPlans.reduce((cal, plan) => {
            cal += plan.caloriesBurned;
            return cal;
        }, 0);
    }
    else {
        exercises = myPlanProvider.savedPlans.length;
        minutes = myPlanProvider.savedPlans.reduce((min, plan) => {
            min += plan.duration;
            return min;
        }, 0);
        calories = myPlanProvider.savedPlans.reduce((cal, plan) => {
            cal += plan.caloriesBurned;
            return cal;
        }, 0);
    }

    return (
        <div className="grid grid-cols-3 gap-3 border border-gray-300 rounded-2xl p-4 sm:p-6">
            <div className="text-center space-y-2 sm:space-y-5 border-r border-gray-300 last:border-r-0">
                <h2 className="font-semibold text-gray-500">Exercises</h2>
                <h2 className="font-extrabold text-3xl sm:text-4xl text-[#C2F800]">
                    {exercises}
                </h2>
            </div>

            <div className="text-center space-y-2 sm:space-y-5 border-r border-gray-300 last:border-r-0">
                <h2 className="font-semibold text-gray-500">Minutes</h2>
                <h2 className="font-extrabold text-3xl sm:text-4xl text-[#C2F800]">
                    {minutes}
                </h2>
            </div>

            <div className="text-center space-y-2 sm:space-y-5">
                <h2 className="font-semibold text-gray-500">Calories</h2>
                <h2 className="font-extrabold text-3xl sm:text-4xl text-[#C2F800]">
                    {calories}
                </h2>
            </div>
        </div>
    );
};

export default MyPlanLayoutCard;