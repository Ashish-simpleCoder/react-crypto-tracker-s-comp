const createDataSets = (history_data, days, currency) =>{
    return [ {
        data: history_data.map(coin=>coin[1]),
        label:`Price (Past ${days} in ${currency})`,
        borderColor:'hsl(140, 100%,35%)'
    } ]
}
export default createDataSets