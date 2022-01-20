import { memo, useEffect, useState } from "react";
import checkVisibility from "../../utils/lazyLoadTableData";
import CoinTableContainer from "./CoinTable/CoinTableContainer";
import HeroSection from "./Hero.section";

const HomePage = memo(()=>{
   const [visible, setVisible] = useState(false)
   useEffect(()=>checkVisibility(setVisible,'coin_table'),[])
   return(
      <>
         <HeroSection/>
         <CoinTableContainer heading="Crypto-Currency's Prices by Market Cap" visible={visible}/>
      </>
   )
})
export default HomePage
