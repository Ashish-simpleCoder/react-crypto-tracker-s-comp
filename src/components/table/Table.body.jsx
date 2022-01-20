import { memo} from "react"
import styled from "styled-components"
import TableRow from "../../pages/Home/CoinTable/Table.row"


const Body = memo(({TABLE_COINS, start, end})=>{
    return(
        <StyledBody>
            { TABLE_COINS.slice(start,end+1).map(coin=><TableRow key={coin.name} coin={coin}/>) }
        </StyledBody>
    )
})
export default Body

const StyledBody = styled.tbody`
    font-size:clamp(1.6rem,1.7rem,1.7vw);
`