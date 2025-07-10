import React from 'react';


const DirectorInfo = () => {
    return (
        <>
           <div className="ml-3 tracking-wider mr-1">
           <div  className="flex  gap-1.5 mr-2.5" >
           <h1 className="md:mt-3.5 sm:text-3xl  ml-3 sm:mt-4 text-2xl mt-4" >Director&apos;s Corner</h1>
           <div  className="text-2xl  mt-9.5  sm:mt-9.5 w-3/12 h-1 sm:w-1/12 rounded-2xl bg-[#F46721]"  ></div>
            </div>

            <div className="ml-3 my-3 ">
                <img alt="director's image"/>
                <h3 className="text-2xl mb-2">Director&apos;s Message</h3>
                <p className=" mr-1.5 mt-2 leading-7.5">It is a privilege and honour for me to have led the NIT Jamshedpur as a Director of the
                    Institution. NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service
                    to the nation and its pride of Jharkhand. NIT Jamshedpur takes extreme pride in the fact that it has
                    been occupying a unique position in impairing technological education to Indian youth.Since
                    its inception , the institute has had a vision to provide quality technical education and to
                    facilitate scientific and technological research,coupled with a mission to develop human potential
                    to its zenith and excellence in teaching and high quality research.

                </p>



              <div className="mt-3 mr-2.5 sm:flex sm:flex-1/3 sm:gap-20 md:gap-30">
                  <div >
                      <h2 className="text-2xl sm:mt-4.5">Our Vision</h2>
                      <p className="sm:mt-2.5 leading-7">To be one of the premier technical institutions
                          for its academic excellence and
                          innovative research to meet the future needs
                          of the society
                      </p>

                  </div>
                  <div >
                      <h2 className="text-2xl mt-3 sm:mt-4.5">Our Mission</h2>
                      <p className="sm:mt-2.5 leading-7">
                          To build conducive environment for learning and creativity.To train students to become technically competent professionals and
                          socially responsible citizens.To develop innovative products and technologies for the betterment of the society
                      </p>
                  </div>

              </div>
           </div>


            </div>
        </>
    );
};

export default DirectorInfo;