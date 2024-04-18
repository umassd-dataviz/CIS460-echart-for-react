import React from "react";
import ReactECharts from "echarts-for-react";

export default function PieChart2() {

	const option = {
		title: [
		  {
			text: 'Radial Polar Bar Label Position (middle)'
		  }
		],
		polar: {
		  radius: [30, '80%']
		},
		radiusAxis: {
		  max: 4
		},
		angleAxis: {
		  type: 'category',
		  data: ['a', 'beta', 'c', 'd'],
		  startAngle: 75
		},
		tooltip: {},
		series: {
		  type: 'bar',
		  data: [2, 1.2, 4, 3.6],
		  coordinateSystem: 'polar',
		  label: {
			show: true,
			position: 'middle',
			formatter: '{b}: {c}'
		  }
		},
		animation: false
	  };

return (<div className="vizContainer">
	<ReactECharts option={option} />;
</div>);}


