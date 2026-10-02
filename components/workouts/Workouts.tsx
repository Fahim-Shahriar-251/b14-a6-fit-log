import { WorkoutType } from '@/app/type';
import WorkoutCard from '@/components/workouts/WorkoutCard';
import React from 'react';


const getWorkOuts = async (): Promise<WorkoutType[]> => {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log("Error fetching workouts data: ", error);
        return [];
    }
}

const WorkoutsHomePage = async () => {
    const workoutsData: WorkoutType[] = await getWorkOuts();
    return (
        <div className='grid gap-5 mb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                workoutsData.slice(0, 12).map(workOut => {
                    return (
                        <WorkoutCard key={workOut.id} workOut={workOut}></WorkoutCard>
                    )
                })
            }
        </div>
    );
};

export default WorkoutsHomePage;