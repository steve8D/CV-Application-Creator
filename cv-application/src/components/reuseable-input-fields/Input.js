import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  id,
  type = "text",
  name,
  value,
  children,
  onInputChange,
  minRows = 1,
}) => {
  return (
    <>
      <TextField
        variant="outlined"
        multiline
        minRows={minRows}
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
