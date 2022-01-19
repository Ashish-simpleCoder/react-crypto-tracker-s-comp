import { memo } from "react";
import styled from "styled-components";

const Para = memo(({text,marginTop})=>{
    return(
        <StyledPara style={marginTop && {marginTop}} dangerouslySetInnerHTML={{__html:text}} ></StyledPara>
    )
})
export default Para

const StyledPara = styled.p`
    font-size:clamp(1.6rem,1.8rem,1.8vw);
    color:var(--prm-clr);

    a{
        color:var(--secondary-clr);
    }
`