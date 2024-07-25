import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import data from './../../dummyJson/data.json'

const History = () => {
    const [history, setHistory] = useState<any>({ user: [] })
    useEffect(() => {
        setHistory(data)
    })
    return (
        <Box>
            <Box sx={{display:'flex'}}>
                <Typography variant='h6' flex={4}>Date</Typography>
                <Typography variant='h6' flex={4}>category</Typography>
                <Typography variant='h6' flex={4}>amount</Typography>
            </Box>

            {history?.expenses?.map((e: any) => (
                <Box sx={{ display: 'flex', }}>
                    <Typography sx={{borderBottom:'1px solid grey'}} flex={4}>
                        {e.date}
                    </Typography>
                    <Typography sx={{borderBottom:'1px solid grey'}} flex={4}>
                        {e.amount}
                    </Typography>
                    <Typography sx={{borderBottom:'1px solid grey'}} flex={4}>
                        {e.category}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default History