'use client'
import React, { useContext } from 'react';
import { MyPlansContext } from '../context/MyPlansContext';

const MyPlansLayout = ({ children }: { children: React.ReactNode }) => {

    const myPlansProvider = useContext(MyPlansContext);


    return (
        <div className='mt-5 space-y-1.5'>
            <div>
                <h2 className='text-5xl font-extrabold'>MY PLAN</h2>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
                <div>
                    <h2>Exercise</h2>
                    <h2>{}</h2>
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MyPlansLayout;