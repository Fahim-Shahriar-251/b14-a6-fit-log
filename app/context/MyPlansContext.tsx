'use client';
import React, { createContext, useState } from 'react';
import { WorkoutType } from '../type';

export interface MyPlansContextType {
    todaysPlans: WorkoutType[];
    setTodaysPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
    savedPlans: WorkoutType[];
    setSavedPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
}

export const MyPlansContext = createContext<MyPlansContextType>({
    todaysPlans: [],
    setTodaysPlans: () => { },
    savedPlans: [],
    setSavedPlans: () => { }
});

const MyPlansProvider = ({ children }: { children: React.ReactNode }) => {

    const [todaysPlans, setTodaysPlans] = useState<WorkoutType[]>([]);
    const [savedPlans, setSavedPlans] = useState<WorkoutType[]>([]);

    const sharedData = {
        todaysPlans,
        setTodaysPlans,
        savedPlans,
        setSavedPlans
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