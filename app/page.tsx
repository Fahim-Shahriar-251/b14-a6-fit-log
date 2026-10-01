import React from 'react';
import Banner from '../components/workouts/Banner';
import WorkoutsHomePage from '@/components/workouts/Workouts';

const WorkoutsPage = async () => {

    return (
        <div className='conainter mx-auto'>
            <div>
                <Banner></Banner>
                <div className='mb-5'>
                    <h2 className='font-extrabold text-3xl'>THE LIBRARY</h2>
                    <p className='text-gray-700'>Twelve lifts covering every major muscle group.</p>
                </div>
                <WorkoutsHomePage></WorkoutsHomePage>
            </div>
        </div>
    );
};

export default WorkoutsPage;