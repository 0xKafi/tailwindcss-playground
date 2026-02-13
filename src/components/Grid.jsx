import React from 'react';
import { AppWindowMac, SquareMousePointer, Brain } from 'lucide-react';

const Grid = () => {

    return (
        <div className='min-h-screen w-full'>
            <div className='max-w-5xl h-screen mx-auto border-l border-r border-neutral-300 relative'>
                <div className='absolute inset-x-0 top-20 h-px w-full bg-neutral-300'></div>
                <div className='absolute inset-x-0 bottom-20 h-px w-full bg-neutral-300'></div>
                <div className='grid grid-cols-2 pt-20 gap-2'>
                    <div className='bg-green-400 min-h-60 w-full col-span-1'></div>
                    <div className='bg-orange-400 min-h-60 w-full col-span-1'></div>
                    <div className='bg-red-400 min-h-60 w-full col-span-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Grid;