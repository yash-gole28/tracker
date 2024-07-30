import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import userData from './../../dummyJson/data.json'

const Chart = () => {
  const [expenses, setExpenses] = useState<any>({ user: [] })
  const spendsArray = userData.monthData.map(item => item.spends);
  const arr = []
  let day = 1
  for (let i = 0; i < userData.monthData.length; i++) {
    arr.push(String(day))
    day++
  }
  //  useEffect(()=>{
  //   setExpenses(userData)
  //  },[])
  return (
    <>
      <BarChart
        borderRadius={10}
        series={[
          { data: spendsArray ,label:'daily spends',color:'rgb(64, 93, 114)'},
          

        ]}
        // height={350}
        //   width={400}
        sx={{ color: 'rgb(147, 145, 133)'}}
        
        xAxis={[{
          data: arr,label:'date',scaleType: 'band', colorMap: {
            type: 'piecewise',
            thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
            colors: ['rgb(64, 93, 114)']
          }
        }]}
        margin={{ top: 40, bottom: 40, left: 40, right: 10 }}
      />
    </>
  )
}

export default Chart