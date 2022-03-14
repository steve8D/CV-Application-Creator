import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ id, type = "text", name, value, children, onInputChange }) => {
  return (
    <>
      <TextField
        variant="outlined"
        type={type}
        name={name}
        id={id}
        value={value}
        label={children}
        onChange={onInputChange}
        style={{ width: 400 }}
      ></TextField>
    </>
  );
};

export default Input;
