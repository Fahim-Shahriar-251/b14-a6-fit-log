'use client'
import React, { useContext, useState } from 'react';
import { MyPlansContext } from '../context/MyPlansContext';
import TodaysPlanCard from '@/components/myPlans/TodaysPlanCard';
import EmptyMyPlanCard from '@/components/myPlans/EmptyMyPlanCard';
import SavedPlanCard from '@/components/myPlans/SavedPlanCard';
import { WorkoutType } from '../type';

const MyPlansPage = () => {

    const myPlansProvider = useContext(MyPlansContext);

    const [sortBy, setSortBy] = useState<"calories" | "duration" | "rating">("calories");
    const sortPlans = (plans: WorkoutType[]) => {
        const sortedPlans = [...plans];

        if (sortBy === "calories") {
            sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if (sortBy === "duration") {
            sortedPlans.sort((a, b) => b.duration - a.duration);
        }
        else {
            sortedPlans.sort((a, b) => b.rating - a.rating);
        }
        return sortedPlans;
    }

    const sortedTodaysPlans = sortPlans(myPlansProvider.todaysPlans);
    const sortedSavedPlans = sortPlans(myPlansProvider.savedPlans);

    return (
        <div className='min-h-screen'>
            <div className='text-end'>
                <select
                    value={sortBy}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSortBy(e.target.value as "calories" | "duration" | "rating")
                    }
                    className="select select-success border border-[#C2F800]"
                >

                    <option value={"calories"}>Calories</option>
                    <option value={"duration"} >Duration</option>
                    <option value={"rating"} >Rating</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box mt-5">
                <input type="radio" name="my_tabs_6"
                    className="tab" aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => myPlansProvider.setActiveTab("todaysPlan")} />
                <div className="tab-content p-6">
                    {sortedTodaysPlans.length > 0 ?
                        <>
                            {sortedTodaysPlans.map(todaysPlan => (
                                <TodaysPlanCard key={todaysPlan.id} todaysPlan={todaysPlan}></TodaysPlanCard>
                            ))}
                        </>
                        :
                        <EmptyMyPlanCard></EmptyMyPlanCard>
                    }
                </div>

                <input type="radio" name="my_tabs_6"
                    className="tab" aria-label="Saved"
                    onChange={() => myPlansProvider.setActiveTab("saved")} />
                <div className="tab-content p-6">
                    {sortedSavedPlans.length > 0 ?
                        <>
                            {sortedSavedPlans.map(savedPlan => (
                                <SavedPlanCard key={savedPlan.id} savedPlan={savedPlan}></SavedPlanCard>
                            ))}
                        </>
                        :
                        <EmptyMyPlanCard></EmptyMyPlanCard>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyPlansPage;