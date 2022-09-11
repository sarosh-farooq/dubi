import React from 'react'
import { styled } from '@mui/material/styles';

const Divider = () => {
    return (
        <UIDivider />
    )
}

export default Divider


const UIDivider = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#161616',
    border: theme.palette.mode === 'dark' ? '1px solid white' : '1px solid #282828',
    width: '100%'
}))