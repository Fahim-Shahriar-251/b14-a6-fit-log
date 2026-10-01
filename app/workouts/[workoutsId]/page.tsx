import { WorkoutType } from '@/app/type';
import WorkoutDetailCard from '@/components/workouts/WorkoutDetailCard';
import React from 'react';

interface workoutDetailProps {
    params: Promise<{ workoutsId: string }>
}

const workoutDetailsPage = async ({ params }: workoutDetailProps) => {

    const { workoutsId } = await params;
    console.log("workoutId:", workoutsId);
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutsId}`);
    const workoutData: WorkoutType = await res.json();

    console.log("HI ");
    return (
        <div className="min-h-screen flex items-center">
            <WorkoutDetailCard workoutData={workoutData}></WorkoutDetailCard>
        </div>
    );
};

export default workoutDetailsPage;