import { memo, useLayoutEffect } from "react";
import styled from "styled-components";
import Graph from "../../components/Graph";
import H2 from "../../components/H2";
import CryptoState from "../../context/CryptoCtx";
import { fetchCoinHistory } from "../../utils/fetchCoinsDetails";


const CoinGraph = memo(({id, visible})=>{
    const {history, currency, setCoin} = CryptoState()
    useLayoutEffect(()=>{
        visible && fetchCoinHistory(id, history.days, currency).then(({prices})=>setCoin(v=>({...v,history:{...v.history,data:prices}})))
    },[currency,id,setCoin,visible,history.days])

    return(
        <StyledGraphContainer id='coin_graph'>
            <H2 text={`Coin history upto ${history.days} days`} center mb/>
            <Graph data={history.data} days={history.days} currency={currency}/>
        </StyledGraphContainer>
    )
})
export default CoinGraph

const StyledGraphContainer = styled.section`
    position:relative;
    width:100%;
    padding:3rem clamp(1rem,3rem,3vw);


    @media(min-width:700px){
        width:calc(100% - 30rem);
        left:30rem;
        top:unset;
    }
`