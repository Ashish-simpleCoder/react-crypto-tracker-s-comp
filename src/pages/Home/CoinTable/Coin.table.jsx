import { memo} from "react"
import styled from "styled-components"
import TableHead from "./Table.head"
import TableBody from "./Table.body"

const table_heads = ['Coin','Price','24h Change','Market Cap']
const CoinTable = memo(()=>{
    return(
        <StyledTable style={{borderCollapse:'collapse'}}>
            <TableHead heads={table_heads}/>
            <TableBody/>
        </StyledTable>
    )
})
export default CoinTable


const StyledTable = styled.table`
    text-align:center;
    width:100%;
    background:var(--table-bg);
    color:var(--prm-clr);
    max-width:90rem;
    margin:auto;
    tbody,tr,td{
        border:1px solid var(--border);
        border-collapse:collapse;
    }
    td{
        padding:1rem;
        img{
            width:3rem;
            height:3rem;
            margin-inline-end:2rem;
        }
    }
`

