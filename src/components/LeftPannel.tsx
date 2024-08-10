
import { MicrophoneIcon, ChevronUpIcon,RewindIcon, PlayIcon, FastForwardIcon  } from '@heroicons/react/solid';
import React, { useState } from 'react';
import CommandCard from '../components/CommandCard'

export default function LeftPannel() {


  const [inputText, setInputText] = useState<string>('');
  const [comments, setComments] = useState<string[]>(
    [
      "Find the top gainers stock today",
      "Why is reliance jio trading very high today",
      "Forcast the price of Bnank nifty for tommorrow",
      "How much NVIDIA stock gain today",
    ]
  
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputText.trim()) {
      setComments([...comments, inputText]);
      setInputText('');
    }
  };

  return (
  <div className="border  h-screen flex flex-col ">

   <div className="border basis-11/12  text-black ">
   { comments.map((e:string)=>{
    return< CommandCard  textCommand={e} />
   })}
     
    </div>
   <div className="border basis-1/12 flex items-center   text-black rounded-md">
      <input
        type="text"
        className="flex-grow outline-none p-2 text-blue"
        placeholder="write a command..."
        value={inputText}
        onChange={handleInputChange}
      />
      <ChevronUpIcon onClick={handleButtonClick} className="h-5 w-5  text-blue-500  ml-2 cursor-pointer" />
      <MicrophoneIcon className="h-5 w-5   text-blue-500  ml-2 mr-2 cursor-pointer" />
    </div>
  <div className=" flex flex-row place-content-around basis-1/12 mt-2 ">

      <div className='basic-4/12 '>
      <RewindIcon className="h-8 w-8 text-blue-500  cursor-pointer mr-8" />
      </div>
      <div className='basic-4/12 '>
      <PlayIcon className="h-8 w-8 text-blue-500 cursor-pointer " />
      </div>
      <div className='basic-4/12 '>
      <FastForwardIcon className="h-8 w-8 text-blue-500 ml-8 cursor-pointer mr-2" />
      </div>
          
  </div>

</div>
  );
}
