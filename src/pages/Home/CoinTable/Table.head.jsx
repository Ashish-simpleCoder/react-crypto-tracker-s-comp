import { memo } from "react"
import styled from "styled-components"
import { TableData } from "./Table.row"

const TableHead = memo(({heads})=>{
    return(
        <StyledHead>
            <tr>
                { heads.map(h=><TableData key={h} name={h} />) }
            </tr>
        </StyledHead>
    )
})
export default TableHead

const StyledHead = styled.thead`
    color:var(--secondary-clr);
    font-size:clamp(1.8rem,2rem,2vw);
`