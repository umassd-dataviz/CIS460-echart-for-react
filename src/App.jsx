import React from 'react'

import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import Complex from './components/Complex'
import './App.css'
import Radar from './components/Radar'
import PieChart2 from './components/PieChart2'
function App() {


  return (
    <>
    <PieChart2/>
      <LineChart />
      <PieChart />
      <BarChart/>
      <Complex/>
      <Radar/>
    </>
  )
}

export default App
