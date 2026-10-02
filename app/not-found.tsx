import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-8xl font-extrabold text-[#C2F800]">
                404
            </h1>

            <h2 className="text-3xl font-bold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="btn mt-6 bg-[#C2F800] border-0 hover:bg-[#1A2312] hover:text-[#C2F800]"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;