import Input from "./Input.js";

const Form = () => {
    return (
        <div className="Form">
            <h2>Basic Information</h2>
            <Input id="firstName">First Name: </Input><br/> 
            <Input id="lastName">Last Name: </Input><br/>   
            <Input id="email">Email: </Input><br/>   
            <Input id="phoneNo">Phone Number: </Input><br/>

            <h2>Education</h2>
            <Input id="school">School: </Input><br/> 
            <Input id="degreeTitle">Degree and Major: </Input><br/>   
            <Input id="gradDate">Graduation Date: </Input><br/>

            <h2>Experience</h2>
            <Input id="companyName">Name of company/project: </Input><br/> 
            <Input id="companyTitle">Title: </Input><br/><br/>   
            <button type="button">Add another job experience</button>

            <h2>Project</h2>
            <Input id="projectName">Name of project: </Input><br/> 
            <p>Description: </p>
            <li><Input></Input></li><br/>
            <button type="button">Add another bullet point</button><br/>
            <br/>
            <button type="button">Add another project</button>

            <h2>Technical Skills</h2>
            <Input id="programmingLanguages">Programming Languages: </Input><br/> 
            <Input id="frameworks">Frameworks: </Input><br/>
            <Input id="developerTools">Developer Tools: </Input><br/>
        </div>
    )
}

export default Form;