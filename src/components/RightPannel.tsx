import { PlayIcon } from '@heroicons/react/solid';

export default function RightPanel() {
    return (
        <div className="border h-screen w-full text-black flex flex-col items-center justify-center bg-gray-100 p-4 md:p-8">
            <div>
                <PlayIcon className="h-8 w-8 text-gray-500 cursor-pointer" />
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Playground
            </div>
            <div className="mb-4 text-center">
                Your live preview will start here. To get started:
            </div>
            <div className="w-full md:w-[410px] h-auto md:h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm md:flex-row md:items-center">
                <span className="font-bold">Type in a query</span>
                <span className="font-light ml-2">or choose one of the examples on the chat interface to get started</span>
            </div>
            <div className="w-full md:w-[410px] h-auto md:h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm  md:flex-row md:items-center">
                <span className="font-light">We support some websites that require authentication, in which a</span>
                <span className="font-bold ml-2">login button</span>
                <span className="font-light ml-2">will appear</span>
            </div>
            <div className="w-full md:w-[410px] h-auto md:h-[70px] border mt-2 mb-2 shadow-sm rounded-lg p-2 text-sm  md:flex-row md:items-center">
                <span className="font-light">You may</span>
                <span className="font-bold ml-2">interact with the screen</span>
                <span className="font-light ml-2">to take over control or correct the agent</span>
            </div>
        </div>
    );
}
