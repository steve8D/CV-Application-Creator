import React from "react";

const Input = ({id, type="text", name, value, children, onInputChange, includeLabel = true}) => {
    return (
    <>
        {includeLabel && <><label htmlFor={id}>{children}</label><br/></>}
        <input 
        type={type} 
        name={name} 
        id={id} 
        value={value} 
        onChange={onInputChange}></input>
    </>
    )
}

export default Input;