import { memo} from "react";
import styled from "styled-components";
import CryptoState from "../../../context/CryptoCtx"
import TableRow from "./Table.row";


const TableBody = memo(()=>{
    const {TABLE_COINS, start, end} = CryptoState()
    return(
        <StyledBody>
            {
                TABLE_COINS.slice(start,end+1).map(coin=><TableRow key={coin.name} coin={coin}/>)
            }
        </StyledBody>
    )
})
export default TableBody

const StyledBody = styled.tbody`
    font-size:clamp(1.6rem,1.7rem,1.7vw);
`