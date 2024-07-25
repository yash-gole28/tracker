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
      height={290}
      width={500}
    //   width={400}
      sx={{width:'50vw'}}
      xAxis={[{ data: arr, scaleType:'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
  )
}

export default Chart