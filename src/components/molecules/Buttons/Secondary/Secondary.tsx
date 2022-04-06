import { Button } from '@mui/material'
import React from 'react'
interface ButtonProps {
    label: string;
    onClickHandler: (arg1: any) => void;
}
function Primary(props: ButtonProps) {
    return (
        <Button
            fullWidth={true}
            sx={{
                border: '1px solid #DCE0DF',
                ':hover': { backgroundColor: '#0365F2', color: 'white' },
                textTransform: 'capitalize'
            }}
            onClick={props.onClickHandler} >
            {props.label}
        </Button>

    )
}

export default Primary

