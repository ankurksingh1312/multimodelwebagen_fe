import {  PlayIcon  } from '@heroicons/react/solid';

export default function ReghtPannel() {

    return (
    <div className="border  h-screen w-full text-black flex flex-col items-center justify-center bg-gray-100">
      <div>
      <PlayIcon className="h-8 w-8 text-grey-500 cursor-pointer " />
      </div>
      
      <div className='text-[35px]'>
        Playground
      </div>
      <div className='mb-4'>
      Your live preview will start here. To get started:
      </div>

      <div className='w-[410px] h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm ' >
        <span className="font-bold">Type in a query</span> <span className="font-light">or choose one of the examples on the chat interface to get started</span>

      </div>

      <div className='w-[410px] h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm ' >
        
        <span className="font-light">We support some websites that require authentication, in which a</span>
        <span className="font-bold">a login</span>
        <span className="font-light">will appear</span>


      </div>

      <div className='w-[410px] h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm ' >
        
        <span className="font-light">You may</span>
        <span className="font-bold">interact with the screen</span>
        <span className="font-light">to take over control or correct the agent</span>


      </div>

  </div>
    );
  }