import { createContext, memo, useContext, useEffect, useState } from "react"

const C = createContext(null)

export const CryptoCtx = memo(({children})=>{
   const [coin, setCoin] = useState({
      currency:'INR',
      symbol:'₹',
      details:{},
      history:{
         days:1,
         data:[]
      }
   })
   const [trending_coins,setTrendingCoins] = useState([])
   const [TABLE_COINS, setTableCoins] = useState([])
   const [page, setPage] = useState({
      start:0,end:9,active_page:1
   })
   const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false)

   useEffect(()=>{
      localStorage.setItem('dark',JSON.stringify(dark))
      document.body.classList.toggle('dark-theme',dark)
   },[dark])

   useEffect(()=>setCoin(v=>({...v,symbol:v.currency === 'INR' ?'₹' :'$'})),[coin.currency, setCoin])


   return(
      <C.Provider value={{...coin,setCoin, TABLE_COINS, setTableCoins, ...page, setPage, dark,setDark, trending_coins,setTrendingCoins}}> {children} </C.Provider>
   )
})
const CryptoState = () => useContext(C)
export default CryptoState