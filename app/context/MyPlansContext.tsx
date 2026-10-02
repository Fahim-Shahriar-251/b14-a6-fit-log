'use client';
import React, { createContext, useState } from 'react';
import { WorkoutType } from '../type';

export interface MyPlansContextType {
    todaysPlans: WorkoutType[];
    setTodaysPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
    savedPlans: WorkoutType[];
    setSavedPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
    activeTab: "todaysPlan" | "saved";
    setActiveTab: React.Dispatch<React.SetStateAction<"todaysPlan" | "saved">>
}

export const MyPlansContext = createContext<MyPlansContextType>({
    todaysPlans: [],
    setTodaysPlans: () => { },
    savedPlans: [],
    setSavedPlans: () => { },
    activeTab: "todaysPlan",
    setActiveTab: () => { },

});

const MyPlansProvider = ({ children }: { children: React.ReactNode }) => {

    const [todaysPlans, setTodaysPlans] = useState<WorkoutType[]>([]);
    const [savedPlans, setSavedPlans] = useState<WorkoutType[]>([]);
    const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">("todaysPlan");

    const sharedData = {
        todaysPlans,
        setTodaysPlans,
        savedPlans,
        setSavedPlans,
        activeTab,
        setActiveTab,
    };

    return (
        <div>
            <MyPlansContext.Provider value={sharedData}>
                {children}
            </MyPlansContext.Provider>
        </div>
    );
};

export default MyPlansProvider;