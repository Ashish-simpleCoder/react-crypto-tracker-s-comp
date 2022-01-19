import { memo } from "react";
import styled from "styled-components";

const H2 = memo(({text,marginTop})=>{
    return(
        <StyledH2 style={marginTop && {marginTop}}>{text}</StyledH2>
    )
})
export default H2

const StyledH2 = styled.h2`
    font-size:clamp(2rem,2.2rem,2.2vw);
`