import { memo } from "react"
import createDataSets from "../utils/createGraphData"
import createGraphLabels from "../utils/createGraphLables"
import { Chart, registerables } from 'chart.js'
import { Line } from "react-chartjs-2"
Chart.register(...registerables)


const Graph = memo(({data, days, currency})=>{
    return(
        <Line
            data={{
                labels:createGraphLabels(data, days),
                datasets:createDataSets(data, days, currency)
            }}
            options={{elements:{point:{radius:1}}}}
        />
        // <></>
    )
})
export default Graph