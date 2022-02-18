import { useState } from "react";
import Input from "./Input.js"
import uniqid from "uniqid";

const ExperienceDataInput = () => {
    const [experienceData, setExperienceData] = useState({
		companyName: '',
		title: '',
		from: '',
		to: '',
		tasks: [],
	});
	
	const [taskData, setTaskData] = useState({
		text: '', 
		id: uniqid()
	})

	const handleInfoChange = (id, e) => {
	const handleInfoChange = (e, id) => {
		let name = e.target.name;
		let value = e.target.value;
		
		if (name === 'task') {
			setExperienceData(prevState => {
				let newTasksList = prevState.tasks.map((task) => {
					if (task.id === id) {
						return { ...task, text: value}
					}
					return task;
				})
				return {...prevState, tasks: newTasksList}
			});
		} else {
			setExperienceData(experienceData => ({...experienceData, [name]: value}));
		}
  	}

	const onAddButton = (e) => {
		e.preventDefault();
		let newTasksArray = [...experienceData.tasks, {
			text: '',
			id: uniqid()
		}];
		console.log(newTasksArray)
		setExperienceData(experienceData => ({...experienceData, tasks: newTasksArray}));
	}

	const onRemoveButton = (id, e) => {
		e.preventDefault();
		let newTasksArray = [...experienceData.tasks].filter(task => task.id !== id);
		console.log(newTasksArray);
		setExperienceData(experienceData => ({...experienceData, tasks: newTasksArray}))
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
					<Input name="task" onInputChange={e => handleInfoChange(e, task.id)} includeLabel={false}></Input><br/>
					<button onClick={e => onRemoveButton(task.id, e)}>Remove bullet point</button>
				</li>
			))} 
			</ul>
			<button onClick={onAddButton}>Add additional bullet point</button>
		</>
    )
}

export default ExperienceDataInput;