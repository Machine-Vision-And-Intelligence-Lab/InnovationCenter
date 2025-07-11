import DirectorInfo from "@/components/DirectorInfo";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";

export default function Home() {
  return (

        <div className="container-fluid page ">
        <Hero/>
        <DirectorInfo/>
        <div className="ml-2"><Heading>Our Schemes</Heading></div>
        </div>


  );
}
