import React from 'react';
import Image from "next/image";
import director2 from "@/assets/director 2.png"
import OrangeUnderline from "@/assets/OrangeUnderline";


const DirectorInfo = () => {
    return (
        <>
           <div className="ml-3 tracking-wider mr-1">
           <div  className="flex  gap-1.5 mr-2.5" >
           <h1 className="md:mt-3.5 sm:text-3xl  ml-3 sm:mt-4 text-2xl mt-4 mb-4 text-[#363131]" >Director&apos;s Corner</h1>
               <OrangeUnderline/>
            </div>

            <div className="ml-3 my-3  ">
                <div className="md:flex  md:gap-8 align-middle lg:gap-10">
                <Image src={director2} alt="director's image" className="h-auto basis-1/4 sm:mt-0 object-cover rounded-xl sm:p-0 lg:py-4 lg:mb-3 pr-3 mb-7 md:mb-0  "   />

                    <div className="basis-2/3 md:mt-5 lg:mt-9">
                        <h3 className="text-2xl mb-2 text-[#4E4A4A]">Director&apos;s Message</h3>
                        <p className=" mr-1.5 mt-2 leading-7.5">It is a privilege and honour for me to have led the NIT
                            Jamshedpur as a Director of the
                            Institution. NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service
                            to the nation and its pride of Jharkhand. NIT Jamshedpur takes extreme pride in the fact
                            that it has
                            been occupying a unique position in impairing technological education to Indian youth.Since
                            its inception , the institute has had a vision to provide quality technical education and to
                            facilitate scientific and technological research,coupled with a mission to develop human
                            potential
                            to its zenith and excellence in teaching and high quality research.

                        </p></div>
                </div>


              <div className="mt-3 mr-2.5 sm:flex sm:flex-1/3 sm:gap-15 md:gap-16">
                  <div className="basis-1/2" >
                      <h2 className="text-2xl sm:mt-4.5 text-[#4E4A4A]">Our Vision</h2>
                      <p className="sm:mt-2.5 leading-7">To be one of the premier technical institutions
                          for its academic excellence and
                          innovative research to meet the future needs
                          of the society
                      </p>

                  </div>
                  <div className="basis-1/2">
                      <h2 className="text-2xl mt-3 sm:mt-4.5 text-[#4E4A4A]">Our Mission</h2>
                      <ul className="sm:mt-2.5 leading-7 list-disc lg:mr-3">
                          <li>To build conducive environment for learning and creativity.</li>
                          <li>To train students to become technically competent professionals and
                              socially responsible citizens.</li>
                          <li>To develop innovative products and technologies for the betterment of the society</li>
                      </ul>
                  </div>

              </div>
           </div>


            </div>
        </>
    );
};

export default DirectorInfo;