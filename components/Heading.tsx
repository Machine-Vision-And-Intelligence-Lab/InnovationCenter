import React, {PropsWithChildren} from 'react';
import OrangeUnderline from "@/components/OrangeUnderline";

const Heading = ({children}:PropsWithChildren) => {
    return (
        <div>
            <div  className="flex  gap-1.5 mr-2.5" >
                <h1 className="md:mt-3.5 sm:text-3xl  ml-3 sm:mt-4 text-2xl mt-4 mb-4 text-[#363131]" >{children}</h1>
                <OrangeUnderline/>
            </div>
        </div>
    );
};

export default Heading;