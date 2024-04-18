import React from "react";
import ReactECharts from "echarts-for-react";

export default function PieChart() {
const data = [
{ category: "Apples", value: 30 },
{ category: "Oranges", value: 50 },
{ category: "Bananas", value: 20 },
];
const options = {
title: {text: "Pie Chart Example"},
series: [
{type: "pie",
data: data.map((d) => ({
name: d.category,
value: d.value}))}]};

return (<div className="vizContainer">
	<ReactECharts option={options} />;
</div>);}


