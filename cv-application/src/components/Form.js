import Input from "./reuseable-input-fields/Input.js";
import ExperienceDataInput from "./reuseable-input-fields/ExperienceDataInput.js";

const Form = ({info, onInputChange}) => {
    const onButtonClicked = () => {
        // add 
    }

    return (
        <div className="Form">
            <h2>Basic Information</h2>
            <Input id="firstName" name="firstName" value={info.firstName} onInputChange={onInputChange}>First Name: </Input><br/> 
            <Input id="lastName" name="lastName" value={info.lastName} onInputChange={onInputChange}>Last Name: </Input><br/>   
            <Input id="email" name="email" value={info.email} onInputChange={onInputChange}>Email: </Input><br/>   
            <Input id="phoneNo" name="phoneNo" value={info.phoneNo} onInputChange={onInputChange}>Phone Number: </Input><br/>

            <h2>Education</h2>
            <Input id="university" name="university" value={info.university} onInputChange={onInputChange}>School: </Input><br/> 
            <Input id="degreeTitle" name="degreeTitle" value={info.degreeTitle} onInputChange={onInputChange}>Degree and Major: </Input><br/>   
            <Input id="graduationDate" name="graduationDate" value={info.graduationDate} onInputChange={onInputChange}>Graduation Date: </Input><br/>

            <h2>Experience</h2>
            <ExperienceDataInput></ExperienceDataInput>
			<button onClick={onButtonClicked}>Add another job experience</button>

            {/* <h2>Project</h2>
            <Input id="projectName">Name of project: </Input><br/>
            <Input>Description: </Input><br/>
            <button type="button">Add another bullet point</button><br/>
            <br/>
            <button type="button">Add another project</button> */}

            <h2>Technical Skills</h2>
            <Input id="programmingLanguages" name="programmingLanguages" value={info.programmingLanguages} onInputChange={onInputChange}>Programming Languages: </Input><br/> 
            <Input id="frameworks" name="frameWorks" value={info.firstName} onInputChange={onInputChange}>Frameworks: </Input><br/>
            <Input id="developerTools" name="developerTools" value={info.firstName} onInputChange={onInputChange}>Developer Tools: </Input><br/>
        </div>
    )
}

export default Form;