import { memo} from "react"
import Table from "../../../components/table/Table"
import CryptoState from "../../../context/CryptoCtx"

const table_heads = ['Coin','Price','24h Change','Market Cap']
const styles = {borderCollapse:'collapse',minWidth:'60rem'}


const CoinTable = memo(()=>{
    const {TABLE_COINS, start, end} = CryptoState()
    return(
        <Table data={{TABLE_COINS, start, end, table_heads, id:'coin_table',styles}}/>
    )
})
export default CoinTable

