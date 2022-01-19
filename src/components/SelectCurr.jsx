import {memo} from 'react'
import styled from 'styled-components'
import CryptoState from '../context/CryptoCtx'

const SelectCurr = memo(()=>{
   const {currency, setCoin} = CryptoState()

   return(
      <SelectStyled
         title='change currency'
         value={currency}
         onChange={(e)=>setCoin(v=>({...v,currency:e.target.value}))}
      >
         <Option value='INR'/>
         <Option value='USD'/>
      </SelectStyled>
   )
})
export default SelectCurr


const Option = memo(({value})=> <option value={value}>{value}</option>)


const SelectStyled = styled.select`
   color:var(--secondary-clr);
   width:10rem;
   height:3rem;
   font-weight:600;
   border:1px solid;
   border-radius:0.3rem;
   cursor:pointer;
   background:inherit;
   margin-inline-end:2rem;
`
