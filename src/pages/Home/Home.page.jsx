import { memo } from "react";
import CoinTableContainer from "./CoinTable/CoinTableContainer";
import HeroSection from "./Hero.section";

const HomePage = memo(()=>{
   return(
      <>
         <HeroSection/>
         <CoinTableContainer heading="Crypto-Currency's Prices by Market Cap"/>
      </>
   )
})
export default HomePage
