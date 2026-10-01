import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-base-100 shadow-sm'>
            <hr className='border-gray-300' />

            <div className='container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left'>

                {/* Logo */}
                <div className='flex items-center gap-3'>
                    <Image
                        src={logo}
                        alt='logo-image'
                        height={30}
                        width={30}
                    />

                    <h2 className='font-extrabold text-xl'>
                        FITLOG
                    </h2>
                </div>

                {/* Copyright */}
                <div>
                    <h2 className='text-sm sm:text-base'>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </h2>
                </div>

            </div>

            <hr className='border-gray-300' />
        </footer>
    );
};

export default Footer;