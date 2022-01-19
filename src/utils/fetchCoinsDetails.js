import { CoinList, HistoricalChart, SingleCoin } from "../api/api"

const fetchCoinsDetails = async(currency) => await await (await fetch(CoinList(currency))).json()
export default fetchCoinsDetails

export const selectedCoinDetails = async(id) => await await (await fetch(SingleCoin(id))).json()
export const fetchCoinHistory = async(id, days, currency) => await await (await fetch(HistoricalChart(id, days, currency))).json()
