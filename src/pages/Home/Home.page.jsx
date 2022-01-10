import { memo } from "react";
import HeroSection from "./Hero.section";

const HomePage = memo(()=>{
   return(
      <>
         <HeroSection/>
      </>
   )
})
export default HomePage
