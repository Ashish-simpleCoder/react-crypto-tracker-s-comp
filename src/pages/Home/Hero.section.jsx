import {memo} from 'react'
import styled from 'styled-components'
import Carousal from './Carousal'

const HeroSection = memo(()=>{

   return(
      <StyledHero>
         <img src="./imgs/hero_bg.avif" alt="" />
         <HeroTitle>
            <h2>Crypto Tracker</h2>
            <p>Get all information about crypto currencies</p>
         </HeroTitle>
         <Carousal/>
      </StyledHero>
   )
})
export default HeroSection

const StyledHero = styled.section`
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   height:80%;
   width:100%;
   overflow:hidden;
   position:relative;
   background:black;

   >img{
      position:fixed;
      opacity:0.2;
      height:80%;
      width:100%;
      /* object-fit:scale-down; */
   }
   @media (min-width:700px){
      max-height:60rem;
      height:100%;
      >img{
         height:100%;
         max-height:60rem
      }
   }
`

const HeroTitle = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   height:40%;
   h2{
      font-size:clamp(4rem,4.8rem,4.8vw);
      font-weight:500;
      color:var(--hero-title-clr);
      letter-spacing:0.1rem;
   }
   p{
      font-size:clamp(1.3rem,1.6rem,1.6vw);
      color:var(--hero-caption-clr);
      margin-top:1rem;
   }
`
