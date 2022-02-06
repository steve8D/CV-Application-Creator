import { useState } from "react";
import Input from "./Input.js"


const ExperienceDataInput = ({id, name, value, children, onInputChange, onButtonClicked}) => {
    const [experienceData, setExperienceData] = useState({
		companyName: '',
		title: '',
		from: '',
		to: '',
		tasks: [],
	});

	const handleInfoChange = (event) => {
   		setExperienceData(state => ({...state, [event.target.name]: event.target.value}));
  	}
    return (
		<>
			<Input id={id} name="companyName" value={experienceData.companyName} onInputChange={handleInfoChange}>Name of company/project: </Input><br/> 
            <Input id={id} name="companyTitle" value={experienceData.title} onInputChange={handleInfoChange}>Title: </Input><br/><br/>   
			<Input id={id} type="date" name={name} value={experienceData.from} onInputChange={handleInfoChange}>From: </Input><br/><br/>   
            <Input id={id} type="date" name={name} value={experienceData.to} onInputChange={handleInfoChange}>To: </Input><br/><br/>   
			<p>Bullet points</p>
			<button onClick={onButtonClicked}>Add additional bullet point</button>
		</>
    )
}

export default ExperienceDataInput;