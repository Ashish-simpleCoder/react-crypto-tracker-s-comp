import { memo } from "react"
import styled from "styled-components"
import Body from "./Table.body"
import Head from "./Table.head"

const Table = memo(({data})=>{
    const {TABLE_COINS, start, end, table_heads, id, styles} = data
    return(
        <StyledTable id={id} style={styles}>
            <Head heads={table_heads}/>
            <Body TABLE_COINS={TABLE_COINS} start={start} end={end}/>
        </StyledTable>
    )
})
export default Table

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