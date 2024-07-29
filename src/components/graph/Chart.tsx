import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import userData from './../../dummyJson/data.json'

const Chart = () => {
    const [expenses , setExpenses] = useState<any>({user:[]})
    const spendsArray = userData.monthData.map(item => item.spends);
    const arr = []
    let day = 1
    for(let i = 0 ; i<31 ; i++){
        arr.push(String(day))
        day++
    }
   useEffect(()=>{
    setExpenses(userData)
   },[])
  return (
    <div>
         <BarChart
      series={[
        { data: spendsArray },
        
      ]}
      height={390}
      width={700}
    //   width={400}
      sx={{color:'grey'}}
      xAxis={[{ data: arr, scaleType:'band', colorMap: {
        type: 'piecewise',
        thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
        colors: ['rgb(32, 30, 67)'],
      } }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
  )
}

export default Chart