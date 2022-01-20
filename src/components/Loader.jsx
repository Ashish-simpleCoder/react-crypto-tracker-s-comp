import styled from "styled-components"

const Loader = ({w, h}) => {
    return(
        <StyledLoader w={w} h={h}>
           <div className="circle c1"></div>
           <div className="circle c2"></div>
        </StyledLoader>
     )
}
export default Loader

const StyledLoader = styled.div`
   height:100%;
   padding:0.8em 2.5em;
   position:relative;
   display:flex;
   align-items:center;
   justify-content:center;
   text-align:center;

   .circle{
      position:absolute;
      width:${({w})=>w ? w : '3rem'};
      height:${({h})=>h ? h : '3rem'};
      border-radius:50%;
      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;
      border-top-color:purple;
      animation: animate_loaders 1s linear infinite;
   }

   .c2{
      border-bottom-color: red;
      border-top-color:transparent;
   }


   @keyframes animate_loaders{
      0%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(0);
      }50%{
         border-width: clamp(0.1rem,0.2rem,0.2vw);
         transform: rotate(180deg);
      }100%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(360deg);
      }
   }
`