import React from "react";

function ExperienceInput() {
    return (
    <div>
        <h2>Experience</h2>
        <label htmlFor="titleInput">Name of company/project</label>
        <input type="text" id="titleInput"></input>
        <br />
        <label htmlFor="degreeInput">Degree and Major</label>
        <input type="text" id="degreeInput"></input>
        <br />
        <button type="button">Add another</button>
    </div>
    )
}

export default ExperienceInput;