import React from "react";

function BasicInfoInput() {
    return (
    <div className="header">
        <h2>Basic Information</h2>
        <label htmlFor="firstNameInput">First Name</label>
        <input type="text" id="firstNameInput"></input>
        <br></br>   
        <label htmlFor="secondNameInput">Last Name</label>
        <input type="text" id="secondNameInput"></input>
        <br></br>   
        <label htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput"></input>   
        <br></br>   
        <label htmlFor="phoneNumberInput">Phone Number</label>
        <input type="text" id="phoneNumberInput"></input>      
    </div>
    )
}

export default BasicInfoInput;