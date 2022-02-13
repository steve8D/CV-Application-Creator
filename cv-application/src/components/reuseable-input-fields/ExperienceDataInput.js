import { useState } from "react";
import Input from "./Input.js"
import uniqid from "uniqid";

const ExperienceDataInput = () => {
    const [experienceData, setExperienceData] = useState({
		companyName: '',
		title: '',
		from: '',
		to: '',
		tasks: [{text: 'eating food', id:uniqid()}],
	});
	
	const [taskData, setTaskData] = useState({
		text: '', 
		id: uniqid()
	})

	const handleInfoChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		
		if (name === 'task') {
			setTaskData({
				text: value,
				id: taskData.id
			});
		} else {
			setExperienceData(experienceData => ({...experienceData, [name]: value}));
		}
  	}

	const onAddButton = (e) => {
		e.preventDefault();

		let newTasksArray = [...experienceData.tasks, taskData];
		setExperienceData(experienceData => ({...experienceData, tasks: newTasksArray}))

		setTaskData({
			text: '',
			id: uniqid()
		});
	}

	const onRemoveButton = (e, id) => {
		e.preventDefault();
	}

    return (
		<>
			<Input id="companyName" name="companyName" value={experienceData.companyName} onInputChange={handleInfoChange}>Name of company/project: </Input><br/> 
            <Input id="jobTitle" name="title" value={experienceData.title} onInputChange={handleInfoChange}>Title: </Input><br/>  
			<Input id="companyStartDate" name="from" value={experienceData.from} onInputChange={handleInfoChange}>From: </Input><br/> 
            <Input id="companyEndDate" name="to" value={experienceData.to} onInputChange={handleInfoChange}>To: </Input><br/>  
			<p>Your tasks</p>
			<ul>
			{experienceData.tasks.map(task => (
				<li key={task.id}>
					<Input id="companyEndDate" name="task" onInputChange={handleInfoChange} includeLabel={false}></Input><br/>
					<button onClick={onRemoveButton}>Remove bullet point</button>
				</li>
			))} 
			</ul>
			<button onClick={onAddButton}>Add additional bullet point</button>
		</>
    )
}

export default ExperienceDataInput;