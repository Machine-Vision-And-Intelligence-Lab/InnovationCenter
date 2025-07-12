import DirectorInfo from "@/components/DirectorInfo";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import PrimaryImageCarousel from "@/components/PrimaryImageCarousel";
import NewsEventsCarousel from "@/components/NewsEventsCarousel";

export default function Home() {
  return (

        <div className="container-fluid page ">
        <Hero/>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <div className="md:col-span-3 -z-10"><PrimaryImageCarousel/></div>
            <div className="mx-5 sm:ml-0 sm:mr-6 -z-10"><NewsEventsCarousel/></div>
        </div>
        <DirectorInfo/>
        <div className="ml-2"><Heading>Our Schemes</Heading></div>
        </div>


  );
}
