import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CryptoState from "../../context/CryptoCtx";
import { selectedCoinDetails } from "../../utils/fetchCoinsDetails";
import checkVisibility from "../../utils/lazyLoadTableData";
import CoinSideBar from "./Coin.sidebar";
import CoinGraph from "./CoinGraph";

const CoinPage = memo(()=>{
   const {id} = useParams()
   const {setCoin, details} = CryptoState()
   const [visible, setVisible] = useState(false)
   useEffect(()=>checkVisibility(setVisible,'coin_graph'),[])


   useLayoutEffect(()=>{
      selectedCoinDetails(id).then(details=>setCoin(v=>({...v,details})))
   },[id, setCoin])
   const {image, name, description} = details

   return(
      <StyleCoinPage>
         { details && <CoinSideBar image={image?.large} name={name} width={'20rem'} description={description?.en?.split(". ")[0]}/>}
         { details &&  <CoinGraph id={id} visible={visible}/>}

      </StyleCoinPage>
   )
})
export default CoinPage

const StyleCoinPage = styled.section`
   display:flex;
   width:100%;
   flex-direction:column;
`
