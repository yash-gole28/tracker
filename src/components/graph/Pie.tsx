import * as React from 'react';

import { PieChart } from '@mui/x-charts/PieChart';
import dummy from './../../dummyJson/category.json'

const Pie = () => {
  // const amtData = dummy.amountSpent.map(item=>({id:0,value:item.amount,label:item.category}))
  const amountData = dummy.amountSpent.map(item => ({
    id: 0, // Assuming id might be available in dummy data; adjust as needed
    value: item.amount,
    label: item.category
  }));
  const pallete = ['rgb(255, 76, 76)','rgb(239, 90, 111)','rgb(83, 100, 147)','rgb(255, 222, 77)','rgb(212, 189, 172)','rgb(255, 170, 170)']
  return (
    <>
    <PieChart
    colors={pallete}
      series={[
        {
          data: amountData,paddingAngle:2,innerRadius:20
        }
      ]}
      width={500}
      height={200}
      
    />
    </>
  )
}

export default Pie