import { useState } from "react";
import Input from "./Input.js"
import uniqid from "uniqid";

const ExperienceDataInput = ({onButtonClicked}) => {
    const [experienceData, setExperienceData] = useState({
		companyName: '',
		title: '',
		from: '',
		to: '',
		task: {
			text: '', 
			id: uniqid()
      	},
		tasks: [],
	});

	const handleInfoChange = (event) => {
		setExperienceData(state => ({...state, [event.target.name]: event.target.value}));
  	}

	const onAddButton = () => {

	}

	const onRemoveButton = () => {

	}

    return (
		<>
			<Input id="companyName" name="companyName" value={experienceData.companyName} onInputChange={handleInfoChange}>Name of company/project: </Input><br/> 
            <Input id="jobTitle" name="title" value={experienceData.title} onInputChange={handleInfoChange}>Title: </Input><br/><br/>   
			<Input id="companyStartDate" type="date" name="from" value={experienceData.from} onInputChange={handleInfoChange}>From: </Input><br/><br/>   
            <Input id="companyEndDate" type="date" name="to" value={experienceData.to} onInputChange={handleInfoChange}>To: </Input><br/><br/>   
			<p>Bullet points</p>
			<Input id="jobTitle" name="title" value={experienceData.title} onInputChange={handleInfoChange}>Title: </Input><br/><br/>   
			<button onClick={onButtonClicked}>Add additional bullet point</button>
			{experienceData.tasks.length !== 0 && <button onClick={onButtonClicked}>Add additional bullet point</button>}
		</>
    )
}

export default ExperienceDataInput;