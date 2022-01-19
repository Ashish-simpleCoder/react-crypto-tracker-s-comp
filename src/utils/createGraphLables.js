const createGraphLabels = (data, days) =>{
    return data.map(coin=>{
        let date = new Date(coin[0])
        let h = date.getHours()
        let m = date.getMinutes()
        let time = (h > 12) ? (`${h - 12}:${m} PM`) : (`${h}:${m} AM`)
        return days === 1 ? time : date.toLocaleDateString()
    })
}
export default createGraphLabels