import { memo, useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import { TrendingCoins } from "../../api/api"
import CryptoState from "../../context/CryptoCtx"
import 'react-alice-carousel/lib/alice-carousel.css'
import CarousalItem from "./CarousalItem"


const Carousal = memo(()=>{
   const {currency, symbol} = CryptoState()
   const [trending_coins,setTrendingCoins] = useState([])
   const [autoPlay, setAutoPlay] = useState(false)

   setTimeout(()=>setAutoPlay(true),1000)

   useEffect(()=>{
      fetchTrendingCoins(currency).then(coins=>setTrendingCoins(coins))
   }, [currency])


   return(
      <div style={{display:'flex',alignItems:'center',height:'60%',width:'100%'}}>
      <AliceCarousel
         // items will take an array of jsx element or normal html elements and render it
         //this will take an array of object of coins
         //then it will render all of the links with images if provided
         // we must provide the elements which we want to render inside of carousal
         // we are passing a function which will render all of the element
         items={itemsObj(trending_coins, symbol)}
         infinite
         autoPlayInterval={1000}
         animationDuration={1000}
         responsive={responsive}
         disableDotsControls
         disableButtonsControls
         autoPlay = {autoPlay}
      >
      </AliceCarousel>
      </div>
   )
})
export default Carousal

const responsive ={
   0:{items:2},
   700:{items:4},
   1200:{items:6}
}
async function fetchTrendingCoins(currency){
   let res = await fetch(TrendingCoins(currency))
   return await res.json()
}

const itemsObj = (trending_coins,select_symbol) => trending_coins.map((coin)=><CarousalItem coin={coin} select_symbol={select_symbol}/>)


