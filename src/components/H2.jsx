import { memo } from "react";
import styled from "styled-components";

const H2 = memo(({text,marginTop, center, mb})=>{
    return(
        <StyledH2 style={marginTop && {marginTop}} center={center && 'center'} mb={mb && '2rem'}>{text}</StyledH2>
    )
})
export default H2

const StyledH2 = styled.h2`
    font-size:clamp(2rem,2.2rem,2.2vw);
    text-align:${({center})=>center && center};
    margin-bottom:${({mb})=>mb && mb};
`