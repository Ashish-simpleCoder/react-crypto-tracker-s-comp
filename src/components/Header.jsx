import {memo} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import CryptoState from '../context/CryptoCtx'
import Button from './Button'
import SelectCurr from './SelectCurr'


const Header = memo(()=>{
   const {setDark,dark} = CryptoState()
   const changeClrTheme = () => setDark(!dark)

   const history = useHistory()
   const handleClick = () => history.push('/')
   return(
      <StyledHeader>
         <LogoContainer handleClick={handleClick}/>
         <SelectCurr/>
         <Button handleClick={changeClrTheme}>
            <img src={"./imgs/"+(dark ? 'dark' : 'light')+"_mode.png"} alt="color icon"  style={{width:'3rem',height:'3rem'}}className='theme_img'/>
         </Button>
      </StyledHeader>
   )
})
export default Header


const LogoContainer = memo(({handleClick}) => {
   return(
      <StyledLogoContainer onClick={handleClick}>
         <span>
            <img src="./imgs/cryptocurrencies.png" alt="crypto" title='<div>Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>' />
         </span>
         <h1>React Crypto Tracker</h1>
      </StyledLogoContainer>
   )
})


const StyledHeader = styled.header`
   padding:1rem clamp(1rem,3rem,3vw);
   display:flex;
   justify-content:space-between;
   align-items:center;
   background:var(--header-bg);
   position:sticky;
   top:0;
   z-index:2;
`

const StyledLogoContainer = styled.section`
   display:flex;
   align-items:center;
   flex:1;
   cursor: pointer;
   span{
      margin-inline-end:1rem;
   }
   h1{
      color:var(--prm-clr);
      font-size:clamp(1.8rem,2rem,2vw);
      font-weight:400;
   }
`

