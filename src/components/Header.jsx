import {memo} from 'react'
import styled from 'styled-components'
import SelectCurr from './SelectCurr'

const title_lab = 'change color theme - light and dark'

const Header = memo(()=>{
   return(
      <StyledHeader>
         <LogoContainer/>
         <SelectCurr/>
         <button title={title_lab} onClick={changeClrTheme} style={{position:'absolute',right:'0',marginInlineState:'2rem'}}>dark</button>
      </StyledHeader>
   )
})

export default Header
const changeClrTheme = () => document.body.classList.toggle('dark-theme')
changeClrTheme()
const LogoContainer = memo(() => {
   return(
      <StyledLogoContainer>
         <span>
            <img src="./imgs/cryptocurrencies.png" alt="crypto" title='<div>Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>' />
         </span>
         <h1>React Crypto Tracker</h1>
      </StyledLogoContainer>
   )
})


const StyledHeader = styled.header`
   padding:1rem 3rem;
   display:flex;
   justify-content:space-between;
   background:var(--header-bg);
`

const StyledLogoContainer = styled.section`
   display:flex;
   align-items:center;
   span{
      margin-inline-end:1rem;
   }
   h1{
      color:var(--prm-clr);
      font-size:clamp(1.8rem,2rem,2vw);
      font-weight:400;
   }
`
