'use client'
import { MyPlansContext } from '@/app/context/MyPlansContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavBarButton = () => {

    const myPlansProvider = useContext(MyPlansContext);

    return (
        <div className="navbar-end flex gap-2">
            <Link
                href="/myPlans"
                className="btn bg-[#ccff00] border-0 hover:bg-[#1A2312] hover:text-[#C2F800]"
            >
                Plan <span>({myPlansProvider.todaysPlans.length})</span>
            </Link>

            <Link
                href="/myPlans"
                className="btn border-[#ccff00] hover:bg-[#1A2312] hover:text-[#C2F800]"
            >
                Saved <span>({myPlansProvider.savedPlans.length})</span>
            </Link>
        </div>
    );
};

export default NavBarButton;