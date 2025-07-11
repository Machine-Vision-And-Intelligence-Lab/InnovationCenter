import React from 'react';

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-4 h-[70vh] bg-gray-500 ">
            <div >
                <div className="sm:text-4xl text-3xl text-white sm:tracking-wide"><span className="text-[#F46721]">i</span> HUB</div>
                <div className="sm:text-4xl text-3xl text-white sm:tracking-wide">NIT <span className="text-[#F46721]">JAMSHEDPUR</span></div>
            </div>
            <div className="hidden md:block">

            </div>

        </div>
    );
};

export default Hero;