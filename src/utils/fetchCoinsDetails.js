import { CoinList } from "../api/api"

const fetchCoinsDetails = async(currency) => await await (await fetch(CoinList(currency))).json()
export default fetchCoinsDetails