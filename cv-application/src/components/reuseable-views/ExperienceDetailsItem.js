import React from "react";

const ExperienceDetailsItem = ({ experienceInfo }) => {
  return (
    <div className="experience">
      <div className="title">
        <p>{experienceInfo.companyName}</p>
        <p>{`${experienceInfo.from} - ${experienceInfo.to}`}</p>
      </div>
      <p>{experienceInfo.title}</p>
      <p>{experienceInfo.desciption}</p>
    </div>
  );
};

export default ExperienceDetailsItem;
