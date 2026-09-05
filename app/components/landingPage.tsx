import { Features } from "./sections/Features";
import { HeaderAnnouncement } from "./sections/HeaderAnnouncement";
import { HeroSection } from "./sections/Herosection";
import { HowItWorksSection } from "./sections/Howitworkssection";
import { NavBar } from "./sections/Navbar";
import { PreSection } from "./sections/PreSection";

export default function LandingPage() {
  return (
    <div className="">
        <HeaderAnnouncement/>
        <NavBar/>
        <HeroSection/>
        <HowItWorksSection/>
        <PreSection/>
        <Features/>

    </div>
  )

}