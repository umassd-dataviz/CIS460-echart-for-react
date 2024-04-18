import React, { useState,useEffect } from "react";
import ReactECharts from "echarts-for-react";

export default function BarChart() {
    const [option, setOptions] = useState({});
    
    useEffect(() => {

        setOptions({
            title: {text: "Bar Chart Example"},
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }]
          })  
    },[])
    return  (
        <div className="vizContainer">
            <ReactECharts option={option} />
        </div>
      );
}