import React from "react";

const Input = ({id, type="text", value, children}) => {
    return (
    <>
        <label htmlFor={id} value={value}>{children}</label>
        <input type={type} id={id}></input>
    </>
    )
}

export default Input;