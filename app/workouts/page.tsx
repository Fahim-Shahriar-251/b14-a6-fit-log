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

const Workouts = async () => {
    const workoutsData: WorkoutType[] = await getWorkOuts();
    return (
        <div className='conainter mx-auto'>
            <h2 className="mt-5 mb-10 text-center text-5xl font-extrabold bg-linear-to-l from-[#91dc53] to-[#78e01d] bg-clip-text text-transparent">
                WORKOUTS
            </h2>
            <div className='mb-7'>
                <h2 className='font-extrabold text-3xl'>THE LIBRARY</h2>
            </div>
            <div className='grid gap-5 mb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gri'>
                {
                    workoutsData.map(workOut => {
                        return (
                            <WorkoutCard key={workOut.id} workOut={workOut}></WorkoutCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Workouts;