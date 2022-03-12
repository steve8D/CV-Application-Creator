import { useState, useEffect } from "react";
import Input from "./Input.js"
import uniqid from "uniqid";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ExperienceDataInput = ({experienceDetails, handleExperienceDetailsChange}) => {
	const [experienceData, setExperienceData] = useState({
		companyName: experienceDetails.companyName,
		title: experienceDetails.title,
		from: experienceDetails.from,
		to: experienceDetails.to,
		tasks: experienceDetails.tasks? experienceDetails.tasks: [],
		id: experienceDetails.id
	});

	useEffect(() => handleExperienceDetailsChange(experienceData), [experienceData])

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
			<Input 
				id="companyName" 
				name="companyName" 
				value={experienceData.companyName} 
				onInputChange={e => handleInfoChange(e)}>
					Name of company/project: 
			</Input><br/> 
            <Input 
				id="jobTitle" 
				name="title" 
				value={experienceData.title} 
				onInputChange={handleInfoChange}>
					Title: 
			</Input><br/>  
			<Input 
				id="companyStartDate" 
				name="from" 
				value={experienceData.from} 
				onInputChange={handleInfoChange}>
					From: 
			</Input><br/> 
            <Input 
				id="companyEndDate" 
				name="to" 
				value={experienceData.to} 
				onInputChange={handleInfoChange}>
					To: 
			</Input>  
			<p>Your tasks</p>
			
			<ul>
				{experienceData.tasks.map((task, index) => (
					<li key={task.id}>
						<Input 
							name="task" 
							value={task.text} 
							onInputChange={e => handleInfoChange(e, task.id)} 
							includeLabel={false}>
						</Input>
						<IconButton 
							aria-label="delete" 
							onClick={e => onRemoveButton(task.id, e)}>
								<DeleteIcon />	
						</IconButton>
						{(index === experienceData.tasks.length-1)? 
							<IconButton onClick={onAddButton}><AddIcon /></IconButton>: null}
					</li>
				))}
			</ul>
			
			{experienceData.tasks.length === 0? 
				<ul><li><IconButton onClick={onAddButton}><AddIcon /></IconButton></li></ul>: null} 
		</>
    )
}

export default ExperienceDataInput;