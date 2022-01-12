import React from "react";
import BasicInfoInput from './form/BasicInfoInput';
import EducationInput from './form/EducationInput';
import ExperienceInput from './form/EducationInput';
import SkillsInput from './form/EducationInput';

function Form() {
    return (
        <div className="Form">
            <BasicInfoInput />
            <EducationInput />
            <ExperienceInput />
            <SkillsInput />
        </div>
    )
}

export default Form;