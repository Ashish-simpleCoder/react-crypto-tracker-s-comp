import { memo } from "react";
import styled from "styled-components";
import H2 from "../../components/H2";
import Image from "../../components/Image";
import Para from "../../components/Para";

const SideBar = memo(({image,name, width, description})=>{

    return(
        <StyledSideBar>
            {image && <Image img={image} width={width}/>}
            <H2 text={name} marginTop='2rem'/>
            {description && <Para text={description} marginTop='2rem'/>}
        </StyledSideBar>
    )
})
export default SideBar

const StyledSideBar = styled.section`
    padding:3rem;
    border-right:1px solid;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* left:0; */
    width:100%;
    height:50rem;

    @media(min-width:700px){
        position:fixed;
        width:30rem;
        height:100%;
    }
`