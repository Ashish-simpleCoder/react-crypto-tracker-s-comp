import { memo } from "react";
import CryptoState from "../../../context/CryptoCtx";


const TableRow = memo(({coin})=>{
    const {symbol} = CryptoState()
    let {name, image, current_price, price_change_percentage_24h:price_change, market_cap} = coin
    price_change = (price_change > 0) ? "+"+price_change : price_change
    let profit = price_change > 0 ? "true" : 'false'
    market_cap = market_cap.toString().slice(0, 6)
    return(
        <tr>
           <TableData name={name} image={image}/>
           <TableData name={current_price} symbol={symbol}/>
           <TableData name={price_change} profit={profit}/>
           <TableData name={market_cap} symbol={symbol}/>
        </tr>
    )
})
export default TableRow

export const TableData = memo(({name,image, symbol, profit})=>{
    return(
        <td style={image && {display:'flex',alignItems:'center'}}  className={profit && (profit === 'true' ? 'profit' : 'lose')}>
            { image && <img src={image} alt='coin'></img> }
            {symbol && symbol+" "}{name}
        </td>
    )
})