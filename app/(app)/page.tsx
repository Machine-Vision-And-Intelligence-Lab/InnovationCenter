import DirectorInfo from "@/components/DirectorInfo";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import PrimaryImageCarousel from "@/components/PrimaryImageCarousel";
import NewsEventsCarousel from "@/components/NewsEventsCarousel";

export default function Home() {
  return (

        <div className="container-fluid page ">
        <Hero/>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3">
            <div className="mx-1 my-3 sm:my-4 sm:col-span-2 md:ml-1  lg:col-span-3"><PrimaryImageCarousel/></div>
            <div className="mx-5  sm:mx-6 my-3"><NewsEventsCarousel/></div>
        </div>
        <DirectorInfo/>
        <div className="ml-2"><Heading>Our Schemes</Heading></div>
        </div>


  );
}
