import React from 'react';
import { AppWindowMac, SquareMousePointer, Brain } from 'lucide-react';

const GridCards = () => {
    const chatMessage = [
        {
            role: 'user',
            message: "Hello, how are you?"
        },
        {
            role: 'bot',
            message: "I'm good, thank you! How can I help you today?"
        },
        {
            role: 'user',
            message: "I want to create a workflow that will send an email to all my clients"
        },
        {
            role: 'bot',
            message: 'Nah, do it yourself.'
        },
    ]
    const AIMessage = ({children})=>{
        return <div className='flex items-bottom justify-start my-8'>
            <div className='h-10 w-10 shadow-lg text-sm border mr-2 bg-linear-to-b from-green-600 to-green-400 border-gray-400 rounded-full'></div> 
            <div className='bg-gray-200 rounded-bl-xl rounded-tl-sm rounded-r-xl p-1'>
            <p className='text-sm p-1'>{children}</p>
            </div>
        </div>
    }
        const UserMessage = ({children})=>{
        return <div className='flex items-bottom justify-end my-8'>
            <div className='bg-blue-500 rounded-br-xl max-w-[80%] rounded-tr-sm rounded-l-xl text-white p-1'>
            <p className='text-sm p-1'>{children}</p>
            </div>
            <div className='h-10 w-10 shadow-lg ml-2 text-sm bg-linear-to-b from-violet-600 to-violet-400 border text-white border-gray-400 rounded-full'></div> 
        </div>
    }
    return (
        <div className='min-h-screen w-full'>
            <div className='max-w-6xl h-screen mx-auto border-l border-r border-neutral-300 relative'>
                <div className='absolute inset-x-0 top-20 h-px w-full bg-neutral-300'></div>
                <div className='absolute inset-x-0 bottom-0 h-px w-full bg-neutral-300'></div>
                <div className='grid grid-cols-2 pt-20 divide-x divide-y divide-neutral-200'>
                    {/* grid-1 */}
                    <div className='col-span-1 p-4 w-full'>
                        <div className='flex items-center space-x-2'>
                            <Brain  size={16}/>
                            <h1 className='font-semibold text-lg text-black/70'>LLM Model Selector</h1>
                        </div>
                        <p className='font-medium text-md text-[#888888]'>Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</p>

                        <div className='pt-10 px-4 mask-[linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]'>
                            <div className='w-[90%] mx-auto rounded-lg border-t border-neutral-200 bg-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] relative'>
                                <div className='p-4'>
                                    <div className='flex space-x-2'>
                                        <div className='h-3 w-3 bg-red-500 rounded-full'></div>
                                        <div className='h-3 w-3 bg-orange-500 rounded-full'></div>
                                        <div className='h-3 w-3 bg-green-500 rounded-full'></div>
                                    </div>

                                    <div className='mt-12 divide-y divide-neutral-200'>
                                        <div className='flex items-center justify-start space-x-2 pb-4'>
                                            <AppWindowMac size={16} />
                                            <h2 className='text-sm font-normal text-black/70'>All Model</h2>
                                            <div className='bg-gray-50 border border-gray-200 rounded-md px-2  text-xs'>69,420</div>
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex items-center justify-between pb-4'>
                                                <div>
                                                    <h3 className='font-normal text-black/60 text-sm'>Claude 4 Opus</h3>
                                                </div>
                                                <div>
                                                    <div className='bg-red-50 border border-red-400 text-red-500 rounded-sm px-2 text-xs'>Unavailable</div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between pb-4'>
                                                <div>
                                                    <h3 className='font-normal text-black/60 text-sm'>Chatgpt</h3>
                                                </div>
                                                <div>
                                                    <div className='bg-green-50 border border-green-400 text-green-500 rounded-sm px-2 text-xs'>Connected</div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between pb-4'>
                                                <div>
                                                    <h3 className='font-normal text-black/60 text-sm'>Llama 3.0</h3>
                                                </div>
                                                <div>
                                                    <div className='bg-orange-50 border border-orange-400 text-orange-500 rounded-sm px-2 text-xs'>Waiting</div>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            <div className='absolute
                                w-[35%] bg-white -right-5 -top-5
                                shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg divide-y divide-neutral-300 border border-neutral-200'>
                                <div className='flex items-center justify-between p-2'>
                                    <h3 className='font-semibold text-sm'>OpenAI</h3>
                                    <p className='font-bold text-xs text-neutral-400'>GPT-5</p>
                                </div>
                                <div className='p-2'>
                                    <div className='bg-blue-50 border w-fit border-blue-400 text-blue-500 rounded-sm px-2 py-1 text-xs'>Connected</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* grid-2 */}
                    <div className='col-span-1 p-4 w-full relative'>
                        <div className='flex items-center space-x-2'>
                            <SquareMousePointer size={16}/>
                            <h1 className='font-semibold text-lg text-black/70'>Text to workflow builder</h1>
                        </div>
                        <p className='font-medium text-md text-[#888888]'>Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.</p>

                        <div className='w-[80%] mx-auto mt-5 max-h-60 mask-y-from-70% mask-y-to-100%'>
                            <div className='max-h-60 overflow-y-scroll   [&::-webkit-scrollbar]:hidden
                                    [-ms-overflow-style:none]
                                    [scrollbar-width:none]'>
                                {
                                    chatMessage.map((chat, idx)=> chat.role === 'bot' ?<AIMessage key={idx}>{chat.message}</AIMessage> : <UserMessage key={idx}>{chat.message}</UserMessage>)
                                }
                            </div>
                        </div>
                        <input className='absolute outline-none w-[65%] bottom-0 left-1/2 -translate-1/2 p-3 text-sm shadow-md rounded-lg bg-white border-gray-100 border' type="text" placeholder='Ask me question'/>
                    </div>
                    {/* grid-3*/}
                    <div className='col-span-2'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCards;