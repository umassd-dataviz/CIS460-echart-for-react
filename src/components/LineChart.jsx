import React, { useState,useEffect } from "react";
import ReactECharts from "echarts-for-react";

export default function LineChart() {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        setOptions([
            {
              title: {
                text: "Chart 1"
              },
              xAxis: {
                type: "category",
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
              },
              yAxis: {
                type: "value"
              },
              series: [
                {
                  type: "line",
                  data: [150, 230, 224, 218, 135, 147, 260]
                }
              ]
            },
            {
              title: {
                text: "Chart 2"
              },
              xAxis: {
                type: "category",
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
              },
              yAxis: {
                type: "value"
              },
              series: [
                {
                  type: "line",
                  data: [34, 56, 77, 86, 34, 65, 76]
                }
              ]
            }
          ])
    },[])

    return  (
        <div className="vizContainer">
          {options.map((option, i) => (
            <ReactECharts key={i} option={option} />
          ))}
        </div>
      );
}