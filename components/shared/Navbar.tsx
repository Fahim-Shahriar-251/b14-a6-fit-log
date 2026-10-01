'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import navbarLogo from '@/assets/logo.png';

const Navbar = () => {
    const pathname = usePathname();

    const link = (
        <>
            <li>
                <Link
                    href="/workouts"
                    className={`${pathname.startsWith('/workouts')
                        ? 'bg-[#1A2312] text-[#C2F800]'
                        : 'hover:bg-[#1A2312] hover:text-[#C2F800]'
                        }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/myPlans"
                    className={`${pathname.startsWith('/myPlans')
                        ? 'bg-[#1A2312] text-[#C2F800]'
                        : 'hover:bg-[#1A2312] hover:text-[#C2F800]'
                        }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            ☰
                        </div>

                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>

                    <Image
                        src={navbarLogo}
                        alt="navbarLogo"
                        width={30}
                        height={30}
                    />

                    <Link
                        href="/"
                        className="btn btn-ghost text-xl font-extrabold"
                    >
                        FITLOG
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <Link
                        href="/"
                        className="btn bg-[#ccff00] border-0 hover:bg-[#1A2312] hover:text-[#C2F800]"
                    >
                        Plan
                    </Link>

                    <Link
                        href="/"
                        className="btn border-[#ccff00] hover:bg-[#1A2312] hover:text-[#C2F800]"
                    >
                        Saved
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;