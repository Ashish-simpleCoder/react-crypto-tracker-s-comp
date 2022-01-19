import { memo, useLayoutEffect } from "react";
import styled from "styled-components";
import { HistoricalChart } from "../../api/api";
import Graph from "../../components/Graph";
import CryptoState from "../../context/CryptoCtx";
import { fetchCoinHistory } from "../../utils/fetchCoinsDetails";

const CoinGraph = memo(({id})=>{
    const {history, currency, setCoin} = CryptoState()
    useLayoutEffect(()=>{
        fetchCoinHistory(id, history.days, currency).then(({prices})=>setCoin(v=>({...v,history:{...history,data:prices}})))
    },[])
    return(
        <StyledGraphContainer>
            <Graph data={history.data} days={history.days} currency={currency}/>
        </StyledGraphContainer>
    )
})
export default CoinGraph

const StyledGraphContainer = styled.section`
    position:relative;
    width:100%;
    padding:3rem;

    @media(min-width:700px){
        width:calc(100% - 30rem);
        left:30rem;
        top:unset;
    }
`