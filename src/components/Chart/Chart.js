import React from "react";
import ChartBar from "./ChartBar";
import './chart.css'

const Chart = (props) => {
  const maxDataPoints = props.newdatapoints.map(
    (dataPoints) => dataPoints.value
  );
  const maxValue = Math.max(...maxDataPoints);
  return (
    <div className="chart">
      {props.newdatapoints.map((Points) => (
        <ChartBar
          key={Points.label}
          label={Points.label}
          value={Points.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
