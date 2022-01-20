import { memo, useEffect } from "react";
import CryptoState from "../../../context/CryptoCtx";
import fetchCoinsDetails from "../../../utils/fetchCoinsDetails";
import CoinTable from "./Coin.table";
import Pagination from "./Pagination";


const CoinTableContainer = memo(({heading, visible})=>{
    const {currency, setTableCoins} = CryptoState()
    useEffect(()=>{
        visible && fetchCoinsDetails(currency).then(res=>setTableCoins(res))
    },[setTableCoins,currency,visible])

    return(
        <section style={{padding:'3rem clamp(1rem,3rem,3vw)',textAlign:'center',height:'100%'}}>
            <h2 style={{fontSize:'clamp(2rem,2.6rem,2.6vw)',margin:'1rem 0 2rem 0'}}>{heading}</h2>
            <section style={{width:'100%',overflowX:'auto'}}>
                <CoinTable/>
            </section>
            <Pagination/>
        </section>
    )
})
export default CoinTableContainer