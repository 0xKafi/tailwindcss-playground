import React from 'react';

const LandingPage = () => {
    return (
        <div className='mt-40'>
            <h1 className='max-w-3xl font-bold text-7xl mx-auto text-transparent tracking-tight leading-20 bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-500 text-center'>Unleash the power of <br /> intuitive finance</h1>
            <p className='text-white/80 max-w-xl mx-auto text-center mt-6'>Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>

            <div className='w-full flex items-center justify-center mt-6'>
                <button className='relative group text-white/60 border-neutral-800 border px-4 py-1 rounded-full cursor-pointer'>
                <div className='absolute w-[80%] mx-auto h-px inset-x-0 -bottom-px bg-linear-to-r from-neutral-800 via-sky-400 to-neutral-800 group-hover:bg-linear-to-r group-hover:from-neutral-800 group-hover:via-red-600 group-hover:to-neutral-800 transition duration-400'></div>
                <div className='absolute w-[80%] mx-auto h-px inset-x-0 -top-px bg-linear-to-r from-neutral-800 via-sky-400 to-neutral-800 group-hover:bg-linear-to-r group-hover:from-neutral-800 group-hover:via-red-600 group-hover:to-neutral-800 transition duration-400'></div>
                Join the waitlist</button>
            </div>
        </div>
    );
};

export default LandingPage;