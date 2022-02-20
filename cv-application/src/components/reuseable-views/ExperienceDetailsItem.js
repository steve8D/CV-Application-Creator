import React from "react";

const ExperienceDetailsItem = ({experienceInfo}) => {
    return (
        <div className="experience">
            <div className="title">
                <p>{experienceInfo.companyName}</p>
                <p>{`${experienceInfo.from} - ${experienceInfo.to}`}</p>
            </div>
            <p>{experienceInfo.title}</p>
            <ul>
                {experienceInfo.tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceDetailsItem;