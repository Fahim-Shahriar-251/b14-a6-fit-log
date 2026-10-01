import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <hr className='text-gray-300'/>
            <div className='container mx-auto flex justify-between m-5'>
                <div className='flex items-center gap-3'>
                    <Image src={logo} alt='logo-image' height={30} width={30}></Image>
                    <h2 className='font-extrabold text-xl'>FITLOG</h2>
                </div>
                <div>
                    <h2>© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
                </div>
            </div>
            <hr className='text-gray-300'/>
        </div>
    );
};

export default Footer;