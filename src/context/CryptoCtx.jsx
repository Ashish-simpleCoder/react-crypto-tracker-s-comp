import { createContext, memo, useContext, useEffect, useState } from "react"

const C = createContext(null)

export const CryptoCtx = memo(({children})=>{
   const [coin, setCoin] = useState({
      currency:'INR',
      symbol:'₹'
   })

   return(
      <C.Provider value={{...coin,setCoin}}> {children} </C.Provider>
   )
})
const CryptoState = () => useContext(C)
export default CryptoState