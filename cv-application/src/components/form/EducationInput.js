import React from "react";

function EducationInput() {
    return (
        <>
            <h2>Education</h2>
            <label htmlFor="schoolInput">School</label>
            <input type="text" id="schoolInput"></input>
            <br />
            <label htmlFor="degreeInput">Degree and Major</label>
            <input type="text" id="degreeInput"></input>
            <br />
            <label htmlFor="graduationDateInput">Graduation Date</label>
            <input type="text" id="graduationDateInput"></input>
        </>
    )
}

export default EducationInput;