import React, { useState, useEffect } from "react";
import Input from "./Input.js"
import uniqid from "uniqid";

const ExperienceDataInput = ({handleExperienceDetailsChange, handleExperienceAdd, handleExperienceRemove}) => {
	const [experienceData, setExperienceData] = useState({
		companyName: '',
		title: '',
		from: '',
		to: '',
		tasks: [],
	});

	useEffect(() => {handleExperienceDetailsChange(experienceData)}, [experienceData])

	const handleInfoChange = (e, id) => {
		const {name, value} = e.target;
		
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
		setExperienceData(experienceData => ({...experienceData, tasks: newTasksArray}));
	}

	const onRemoveButton = (id, e) => {
		e.preventDefault();
		let newTasksArray = [...experienceData.tasks].filter(task => task.id !== id);
		setExperienceData(experienceData => ({...experienceData, tasks: newTasksArray}))
	}

    return (
		<>
			<Input id="companyName" name="companyName" value={experienceData.companyName} onInputChange={e => handleInfoChange(e)}>Name of company/project: </Input><br/> 
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