import React from "react";
import TextField from '@mui/material/TextField';

const Input = ({id, type="text", name, value, children, onInputChange, includeLabel = true}) => {
    return (
    <>
        {includeLabel && <><label htmlFor={id}>{children}</label><br/></>}
        <TextField
        variant="outlined"
        type={type} 
        name={name} 
        id={id} 
        value={value}
        label={children} 
        onChange={onInputChange}></TextField>
    </>
    )
}

export default Input;