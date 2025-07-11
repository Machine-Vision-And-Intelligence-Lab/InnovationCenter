import React from 'react';
import Image from "next/image";
import Cardimage from "@/public/assets/cardimage.png";
const Card = () => {
    return (

        <div className="ml-10 sm:ml-2 hover:scale-110 min-w-2/3 max-w-2/4 md:min-w-0 sm:max-w-2/5 md:max-w-1/4 basis-1/3 p-3 px-5 border-2 md:mt-8 border-gray-100 rounded-lg shadow-lg md:mb-8 md:mx-4 sm:mb-5">
            <Image src={Cardimage} alt={'Image'} className="mb-5 ml-1 sm:ml-0 " />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consequatur dolorem ducimus
            explicabo, fugiat harum neque nesciunt perspiciatis saepe!
            </p>
        </div>
    );
};

export default Card;