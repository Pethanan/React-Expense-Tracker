import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((ele) => {
                return (
                    <ChartBar
                        key={ele.label}
                        value={ele.value}
                        maxValue={totalMaximum}
                        label={ele.label}
                    />
                )
            })}
        </div>
    );
};

export default Chart;
